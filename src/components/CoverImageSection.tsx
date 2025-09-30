import Image from 'next/image'

export const CoverImageSection = () => {
  return (
    <section className="cover-image-section relative w-full h-[500px]">
      <Image src="/cover.jpg" alt="Cover" fill priority className="object-cover" />
    </section>
  )
}
