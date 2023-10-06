import { FC } from 'react'
import { Layout, Menu } from 'antd'

import DashboardIcon from '../../../components/icons/DashboardIcon'
import PropertyIcon from '../../../components/icons/PropertyIcon'
import CustomerIcon from '../../../components/icons/CustomerIcon'

import './_sidebar.scss';

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
        className="left-sidebar"
        items={[
          {
            key: '1',
            icon: <DashboardIcon />,
            label: 'Dashboard',                        
          },
          {
            key: '2',
            icon: <PropertyIcon />,
            label: 'Properties',
          },
          {
            key: '3',
            icon: <CustomerIcon />,
            label: 'Customers',
          },
        ]}
      />
    </Sider>
  )
}

export default LayoutSidebar
