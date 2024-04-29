/** @jsxImportSource @emotion/react */

'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { DatePicker, Space, version } from 'antd'
import Hangul from 'hangul-js'
import React from 'react'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;

  &:hover {
    color: white;
  }
`
export default function Page() {
  const color = 'black'
  console.log(Hangul.disassemble('가나다'))
  return (
    <div style={{ padding: '0 24px' }}>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button>Primary Button</Button>
      </Space>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;

          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
    </div>
  )
}
