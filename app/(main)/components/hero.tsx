import Image from 'next/image'
import React from 'react'

type Props = {}

function MainHero({ }: Props) {
  return (
    <div className={'container mx-auto py-5'}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative col-span-3 row-span-2 h-[80vh] overflow-hidden rounded-lg bg-white p-4 shadow-md">
          <Image fill src={'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2'} alt={'bed'} className={'object-cover'} />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-80">
            <h3 className="text-center text-2xl font-bold text-white">Bed</h3>
          </div>
        </div>

        <div className="relative h-full overflow-hidden rounded-lg bg-white p-4 shadow-md">
          <Image fill src={'https://images.unsplash.com/photo-1592078615290-033ee584e267'} alt={'Chair'} className={'object-cover'} />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-80">
            <h3 className="text-center text-2xl font-bold text-white">Chair</h3>
          </div>
        </div>

        <div className="relative col-span-1 h-full overflow-hidden rounded-lg bg-white p-4 shadow-md">
          <Image fill src={'https://images.unsplash.com/photo-1586208958839-06c17cacdf08'} alt={'Kitchen'} className={'object-cover'} />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-80">
            <h3 className="text-center text-2xl font-bold text-white">Kitchen</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHero
