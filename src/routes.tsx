import AuthLayout from '@/components/auth-layout'
import MainLayout from '@/components/main-layout'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Home from '@/pages/home'
import NotFound from '@/pages/not-found'
import SignIn from '@/pages/sign-in'
import SignUp from '@/pages/sign-up'
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
    path: 'sign-in',
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: SignIn,
      },
    ],
  },
  {
    path: 'sign-up',
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: SignUp,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]
