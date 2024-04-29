'use client'

import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'

export function MenubarDemo() {
  const MenubarDemoTest = () => {
    const menubarHelper = cva('ml-80 mr-80')
  }
  return (
    <Menubar variant="default">
      <div className="MenubarWarp flex ml-80 mr-80">
        <Link href="/web/home" className="items-center">
          <div className="logoWrap w-8 h-4">
            <img
              src="/images/mqv_logo.png"
              className="max-w-[90px] max-h-[80px]"
            ></img>
          </div>
        </Link>
        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger>홈</MenubarTrigger>
            <MenubarTrigger>회의실 현황</MenubarTrigger>
            <MenubarTrigger>이력보기</MenubarTrigger>
            <MenubarTrigger>공지사항</MenubarTrigger>
          </MenubarMenu>
        </div>
      </div>
    </Menubar>
  )
}
