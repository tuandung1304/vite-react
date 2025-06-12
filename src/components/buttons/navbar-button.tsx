import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router'

export default function NavbarButton({
  children,
  ...props
}: React.ComponentProps<typeof Button> & { to: string }) {
  return (
    <Button
      className="dark:hover:bg-[#7a848ea5]"
      size="sm"
      variant="ghost"
      {...props}
    >
      <Link to={props.to}>{children}</Link>
    </Button>
  )
}
