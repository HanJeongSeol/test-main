'use client'

import React from 'react'

import Header from '../Header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full m-auto">
      <Header></Header>
      <div className="flex justify-center">
        <div className="test w-full h-full mr-80 ml-80 desktop:bg-amber-500  ">
          {children}
        </div>
      </div>
    </div>
  )
}
