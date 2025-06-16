import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
