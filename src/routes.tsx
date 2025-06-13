import MainLayout from '@/components/main-layout'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Home from '@/pages/home'
import NotFound from '@/pages/not-found'
import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]
