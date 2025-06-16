import Navbar from '@/components/navbar'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className="auth-background flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
