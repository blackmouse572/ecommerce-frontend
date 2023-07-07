'use client'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

function LogoutButton({ }: Props) {
  return (
    <Button onClick={() => signOut({
      callbackUrl: '/'
    })}>
      <LogOut className={'mr-2 '} size={'18'} />
      Sign out</Button>
  )
}

export default LogoutButton
