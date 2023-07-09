'use client'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  images: string[]
} & React.HTMLAttributes<HTMLDivElement>

function ImageShower({ images, className, ...props }: Props) {
  const [currentImage, setCurrentImage] = React.useState(images[0])
  return (
    <div className={cn(className, 'flex gap-2')} {...props}>
      <div className={'space-y-2'}>
        {
          images.map((image, index) => (
            <div key={index} className={
              cn('relative aspect-square h-16 overflow-hidden rounded-lg bg-white p-4 transition-all ease-in-out', {
                'contrast-50': currentImage === image,
              })
            }
              onClick={() => setCurrentImage(image)}
            >
              <Image src={image} alt={image} className={'object-cover'}
                fill
              />
            </div>
          ))
        }
      </div>

      <div className={'relative h-full max-h-[80vh] w-full bg-white p-4'}>
        <Image src={currentImage} alt={currentImage} className={'object-cover'}
          fill
        />
      </div>
    </div >
  )
}

export default ImageShower
