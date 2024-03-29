'use client'

import {
  useSessionContext,
  useUser as useSupaUser,
  type User
} from '@supabase/auth-helpers-react'
import React, { createContext, useEffect, useState } from 'react'
import { type Subscription, type UserDetails } from '../../types'

interface UserContextType {
  accessToken: string | null
  user: User | null
  userDetails: UserDetails | null
  isLoading: boolean
  subscription: Subscription | null
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
)

export type Props = Record<string, any>

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase
  } = useSessionContext()
  const user = useSupaUser()
  const accessToken = session?.access_token ?? null
  const [isLoadingData, setIsloadingData] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  const getUserDetails = () =>
    supabase.from('accounts_private').select('*').single()
  const getSubscription = () =>
    supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .single()

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsloadingData(true)
      Promise.allSettled([getUserDetails(), getSubscription()]).then(
        (results) => {
          const userDetailsPromise = results[0]
          const subscriptionPromise = results[1]

          if (userDetailsPromise.status === 'fulfilled') {
            setUserDetails(userDetailsPromise.value.data as UserDetails)
          }

          if (subscriptionPromise.status === 'fulfilled') {
            setSubscription(subscriptionPromise.value.data as Subscription)
          }

          setIsloadingData(false)
        }
      )
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null)
      setSubscription(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoadingUser])

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription
  }

  return <UserContext.Provider value={value} {...props} />
}

interface UserProviderProps {
  children: React.ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>
}

export default UserProvider
