import { useState, FC } from 'react'
import { Layout } from 'antd'

import LayoutSidebar from './Sidebar'
import LayoutHeader from './Header'

interface DashboardLayoutProps {
  children: JSX.Element
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { Content } = Layout
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <LayoutSidebar collapsed={collapsed} />
      <Layout>
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: 24,
            minHeight: 'calc(100vh - 64px)',
            background: '#D4E2E0',
          }}
        >
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
