import Navbar from '@/components/navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
