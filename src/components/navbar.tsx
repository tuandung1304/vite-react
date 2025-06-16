import logo from '@/assets/logo.svg'
import NavbarButton from '@/components/buttons/navbar-button'
import { ModeToggle } from '@/components/mode-toggle'

export default function Navbar() {
  return (
    <header className="nav-bar-background sticky top-0 flex p-4">
      <nav className="flex flex-1 items-center gap-2">
        <img src={logo} alt="logo" className="mr-3 size-6" />
        <NavbarButton to="/">Home</NavbarButton>
        <NavbarButton to="/about">About</NavbarButton>
        <NavbarButton to="/contact">Contact</NavbarButton>
      </nav>
      <div className="flex items-center gap-2">
        <NavbarButton to="/sign-in">Sign in</NavbarButton>
        <NavbarButton to="/sign-up" variant="outline">
          Sign up
        </NavbarButton>
        <ModeToggle />
      </div>
    </header>
  )
}
