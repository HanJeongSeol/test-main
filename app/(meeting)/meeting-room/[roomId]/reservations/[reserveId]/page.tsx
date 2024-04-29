/** @jsxImportSource @emotion/react */

"use client"

import React from "react"
import { DatePicker, Space, version } from "antd"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

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
  const color = "black"
  return (
    <div style={{ padding: "0 24px" }}>
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
