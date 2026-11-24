import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function VolverArriba() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href="#inicio"
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-navy text-cian shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-institucional"
      aria-label="Volver al inicio de la página"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}
