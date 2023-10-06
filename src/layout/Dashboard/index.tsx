import { useState, FC } from 'react'
import { Layout, theme } from 'antd'

import LayoutSidebar from './Sidebar'
import LayoutHeader from './Header'

interface DashboardLayoutProps {
  children: JSX.Element
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { Content } = Layout
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <LayoutSidebar collapsed={collapsed} />
      <Layout>
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'calc(100vh - 112px)',
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
