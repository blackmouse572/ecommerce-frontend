import React from 'react'
import { Input } from './ui/input'

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>

function GlobalSearch({ }: Props) {
  return (
    <Input placeholder={'Search'} size={18} className={'rounded-full px-5'} />
  )
}

export default GlobalSearch
