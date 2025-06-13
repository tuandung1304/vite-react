import logo from '@/assets/logo.svg'
import NavbarButton from '@/components/buttons/navbar-button'
import { ModeToggle } from '@/components/mode-toggle'

export default function Navbar() {
  return (
    <div className="sticky top-0 flex bg-white/60 p-4 backdrop-blur-sm dark:bg-[#141a21]/60">
      <nav className="flex flex-1 items-center gap-2">
        <img src={logo} alt="logo" className="mr-3 size-6" />
        <NavbarButton to="/">Home</NavbarButton>
        <NavbarButton to="/about">About</NavbarButton>
        <NavbarButton to="/contact">Contact</NavbarButton>
      </nav>
      <ModeToggle />
    </div>
  )
}
