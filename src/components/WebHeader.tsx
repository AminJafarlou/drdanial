import Link from 'next/link'

export function WebHeader() {
  return (
    <header>
      <div style={{ height: '102px' }} className="flex items-center justify-between px-8 py-4">
        <div>logo</div>
        <div>
          <nav>
            <ul className="flex items-center gap-8">
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#services">Conditions</Link>
              <Link href="#contact">About</Link>
              <Link href="#get-in-touch">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Get in Touch</button>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
