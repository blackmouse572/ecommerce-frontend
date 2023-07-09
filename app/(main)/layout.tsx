import GlobalSearch from '@/components/global-search'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { marketingConfig } from '@/config/marketing'
import { Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav className={'flex items-center justify-between gap-2'}>
            <GlobalSearch />
            <Link
              href="/login"
              className={'p-2'}
            >
              <Heart />
            </Link>
            <Link
              href="/login"
              className={'p-2'}
            >
              <ShoppingCart />
            </Link>

          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

export default MainLayout
