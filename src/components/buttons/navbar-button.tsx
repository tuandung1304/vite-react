import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router'

export default function NavbarButton({
  children,
  ...props
}: React.ComponentProps<typeof Button> & { to: string }) {
  return (
    <Link to={props.to}>
      <Button size="sm" variant="ghost" {...props}>
        {children}
      </Button>
    </Link>
  )
}
