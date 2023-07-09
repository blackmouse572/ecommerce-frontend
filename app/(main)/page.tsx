import { MainNav } from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { IWithPaging } from '@/types/models/paging'
import { Product } from '@/types/models/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from 'react-day-picker'
import MainHero from './components/hero'

function fetchProducts(): Promise<Product[]> {
  const res = fetch('https://api.escuelajs.co/api/v1/products')

  return res.then(res => res.json())
}

async function MainPage() {
  const res = await fetchProducts()
  return (
    <>
      <MainHero />
    </>
  )
}

export default MainPage
