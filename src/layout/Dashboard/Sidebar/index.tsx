import { FC } from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'

interface LayoutSidebarProps {
  collapsed: boolean
}

const LayoutSidebar: FC<LayoutSidebarProps> = ({ collapsed }) => {
  const { Sider } = Layout
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div>LOGO</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  )
}

export default LayoutSidebar
