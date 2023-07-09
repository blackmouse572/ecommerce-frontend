import React from 'react'

type Props = {
  slug: string
}

function ProductPage({ slug }: Props) {
  return (
    <div>{slug}</div>
  )
}

export default ProductPage
