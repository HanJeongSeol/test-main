import Link from 'next/link'
import React from 'react'

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  menubarTriggerStyle,
} from '@/components/ui/menubar'

export default function Navbar() {
  return (
    <Menubar location="yellow">
      <MenubarMenu>
        <Link href="/dashboard" legacyBehavior passHref>
          <MenubarTrigger className={menubarTriggerStyle()}>
            File
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
      </MenubarMenu>
      {/*<Link href="/docs" legacyBehavior passHref>*/}
      {/*  <NavigationMenuLink className={navigationMenuTriggerStyle()}>*/}
      {/*    Documentation*/}
      {/*  </NavigationMenuLink>*/}
      {/*</Link>*/}
    </Menubar>
  )
}

//
// import { Layout } from 'antd'
//
// const Navbar = () => {
//   const { Header } = Layout
//   return (
//     <Header></Header>
//   )
// }
//
// export default Navbar
