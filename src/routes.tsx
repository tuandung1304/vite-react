import MainLayout from '@/components/main-layout'
import Home from '@/pages/home'
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
    ],
  },
]
