import Image from 'next/image'
import React from 'react'

function Guide() {
  return (
    <section className='flexCenter flex-col'>
      <div className="padding-container max-container w-full pb-24">
        <Image src='camp.svg' alt='camp' height={50} width={50}/>
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">We are here for you</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide you to easy step</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>As you trek on the trails of Har Ki Dun, you are constantly weaving in and out through ancient villages. 

These villages never fail to charm trekkers. The houses, all wooden, have unique designs. The temples' culture, deities, and rituals are from a civilisation we do not know.

The temples are the heart of the villages, the focal point around which daily life revolves. Villagers wear traditional attire and headgear. It’s as if time has stood still. 

Peering into their homes, we see a lifestyle worth learning from. A sense of harmony exudes from their lives, where humans, animals, and the natural world coexist in beautiful harmony. 

The fact that we witness this firsthand on this trek is a big reason to do the trek. But because this is among the biggest takeaways for trekkers.</p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image src='/boat.png' alt='boat' height={580} width={1440} className='w-full object-cover object-center 2xl:rounded-5xl'/>
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image src="/meter.svg" alt='meter' width={16} height={158} className='h-full w-auto'/>
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
              </div>
              <p className='bold-20 mt-2'>Kedarkantha</p>
            </div>
            <div className="flex w-full flex-col">
              
                <p className="regular-16 text-gray-20">Start track</p>
                <h4 className='bold-20 mt-2 whitespace-nowrap'>Mussorie</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
