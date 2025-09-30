import Image from 'next/image'

export const CoverImageSection = () => {
  return (
    <section className="cover-image-section relative">
        <Image fill src="/cover.jpg" alt="Cover" className="w-full h-auto" />
    </section>
  )
}
