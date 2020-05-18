import React from 'react';
import { Layout, Avatar} from 'antd';
import { Menu, Button } from 'antd';
import { Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import User from './users';
import Head from './head';
import './App.css';


import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const { Title } = Typography;

const {Header,Footer,Sider,Content } = Layout;

function App() {
  return (
    <div className="App">
 
    
    <User/>
    <Head/>

   
    
    </div>
  );
}

export default App;