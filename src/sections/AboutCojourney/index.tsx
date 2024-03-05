import React from 'react'
import Image from 'next/image'

export default function AboutCojourney () {
  const infos = [
    {
      title: 'State-of-the-art AI matchmaking',
      summary: `There are eight billion people. Why is it so hard to find the ones you really want to meet?
      We’re changing this with AI. Whether you’re looking for friends, romance, career advice or you just want to connect with someone new who cares about what you care about, CJ will help you find it.`,
      image: 'image1.png'
    },
    {
      title: 'A friend who always has time for you.',
      summary: `Humans are busy and can’t always be there for you 24/7.
      When you need a friend, CJ is there to talk to you or connect you to someone.`,
      image: 'image2.png'
    },
    {
      title: 'Find what you’re looking for',
      summary:
        'CJ will help you identify where you are in life, where you want to be and what you need to get there. Along the way she’ll connect you to people she thinks you will have a strong bond with. We’re all on a journey of personal growth, but we don’t have to do it alone!',
      image: 'image3.jpg'
    }
  ]
  return (
    <div
      id="cojourney"
      className="bg-[#0D121F] w-full px-8 pb-12 flex flex-col xl:mx-auto items-center"
    >
      <h1 className={'my-16 text-2xl font-bold md:text-4xl text-white'}>
        Powered by AI. Made for Humanity.
      </h1>
      <div className="bg-[#87888F] rounded-3xl p-8 max-w-4xl md:w-4/5 w-full mb-16">
        <div className="flex items-center">
          <Image
            src="/images/profile.png"
            width={70}
            height={70}
            className="w-20 h-20 rounded-full mr:2 md:mr-8 md:rounded-none md:rounded-l-lg"
            alt="profile"
          />
          <div className="ml-4 md:ml-0">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-4xl ">
              CJ
            </h2>
            <p className="hidden text-[#1D1D1D] text-lg md:text-xl md:block">
              {' '}
              Life is short. Let’s try to make the most of it!
            </p>
          </div>
        </div>
        <div className="py-4 md:hidden">
          <p className="text-[#1D1D1D] text-lg md:text-xl">
            {' '}
            Life is short. Let’s try to make the most of it!
          </p>
        </div>
      </div>
      {infos.map((info, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col  ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-6 justify-between max-w-7xl md:w-4/5 w-full`}
          >
            <div className="flex flex-col items-start w-full gap-6 md:w-1/2">
              <h1 className="text-xl font-semibold text-white md:text-2xl">
                {info.title}
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2">
                  <p className="font-light text-white text-base mt-[-2px]">
                    {info.summary}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`flex justify-center md:justify-normal ${
                index % 2 !== 0 ? '' : 'md:justify-end'
              } w-full  md:w-1/2`}
            >
              <Image
                src={`/images/${info.image}`}
                height={300}
                width={300}
                alt=""
                className="self-end rounded-2xl"
              />
            </div>
          </div>
        )
      })}
      {/* <div className="flex w-11/12 py-16">
        <div className="w-1/2 mr-16">
          <h1 className="mb-4 font-bold text-white">
            State-of-the-art AI matchmaking
          </h1>
          <p className="text-sm text-white">
            There are eight billion people. Why is it so hard to find the ones
            you really want to meet? We’re changing this with AI. Whether you’re
            looking for friends, romance, career advice or you just want to
            connect with someone new who cares about what you care about, CJ
            will help you find it.
          </p>
        </div>
        <div className="flex w-1/2">
          <Image
            src="/images/image 5.png"
            alt="image"
            width={300}
            height={300}
            // className="w-full"
          />
        </div>
      </div> */}
    </div>
  )
}
