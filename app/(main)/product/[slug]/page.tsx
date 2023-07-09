import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/models/product'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ImageShower from './components/images-slider'

type Props = {
  params: {
    slug: string
  }
}

const ProductMock: Product = {
  id: '1',
  price: 100,
  title: 'Product 1',
  description: 'Description 1',
  images: [
    'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267',
  ],
  category: 'bed',
}

function ProductPage({ params }: Props) {
  return (
    <div className={'container mx-auto'}>
      <div className={'grid h-[80vh] grid-cols-1 gap-2 md:grid-cols-3 md:gap-8'}>
        <ImageShower images={ProductMock.images} className={'col-span-1 md:col-span-2'} />
        <div className={'space-y-2'}>
          <h1 className={'text-2xl font-bold'}>{ProductMock.title}</h1>
          <p className={'text-lg'}>{ProductMock.description}</p>
          <span className={'text-2xl font-bold'}>${ProductMock.price}</span>
          <div className={'flex items-center gap-2'}>
            <Button variant={'default'}>Buy now</Button>
            <Button variant={'outline'}>
              <Heart className={'mr-2 h-4 w-4'} />
              I like it!</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
