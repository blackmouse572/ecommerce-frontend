import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import React from 'react'
import LogoutButton from './logout-button'

type Props = {}

async function getAccount() {
  const session = await getServerSession(authOptions)

  return session
}

async function AccountPage({ }: Props) {
  const rs = await getAccount()
  return (
    <div>
      <pre>{JSON.stringify(rs, null, 2)}</pre>
      <LogoutButton />
    </div>
  )
}

export default AccountPage
