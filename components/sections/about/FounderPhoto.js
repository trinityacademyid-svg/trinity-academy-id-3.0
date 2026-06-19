'use client'
import Image from 'next/image'

export default function FounderPhoto({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ objectFit: 'cover', objectPosition: 'top' }}
      onError={(e) => { e.target.style.display = 'none' }}
    />
  )
}