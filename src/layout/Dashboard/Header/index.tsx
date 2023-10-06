import React, { FC } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button, theme } from 'antd'

interface LayoutHeaderProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const LayoutHeader: FC<LayoutHeaderProps> = ({ collapsed, setCollapsed }) => {
  const { Header } = Layout
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}

export default LayoutHeader
