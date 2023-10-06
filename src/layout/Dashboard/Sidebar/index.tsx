import { FC, SetStateAction, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import DashboardIcon from '../../../components/icons/DashboardIcon'
import PropertyIcon from '../../../components/icons/PropertyIcon'
import CustomerIcon from '../../../components/icons/CustomerIcon'

import './_sidebar.scss'

interface LayoutSidebarProps {
  collapsed: boolean
}

const LayoutSidebar: FC<LayoutSidebarProps> = ({ collapsed }) => {
  const location = useLocation()
  const { Sider } = Layout
  
  const [current, setCurrent] = useState(location.pathname)
  const handleClick = (event: { key: SetStateAction<string> }) => {
    setCurrent(event.key)
  };

  useEffect(() => {
    if (location) {      
      if (current === location.pathname) {
        setCurrent(location.pathname)
      }
    }
  }, [location, current])


  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div>LOGO</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
        className="left-sidebar"
        selectedKeys={[current]}
        onClick={handleClick}
        items={[
          {
            key: '/dashboard',
            icon: <DashboardIcon />,
            label: <Link to="/dashboard">Dashboard</Link>,
          },
          {
            key: '/properties',
            icon: <PropertyIcon />,
            label: <Link to="/properties">Properties</Link>,
          },
          {
            key: '/customers',
            icon: <CustomerIcon />,
            label: <Link to="/customers">Customers</Link>,
          },
        ]}
      />
    </Sider>
  )
}

export default LayoutSidebar
