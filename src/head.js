import React from 'react';
import { Layout, Avatar, Divider} from 'antd';
import { Menu, Button } from 'antd';
import { Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import User from './users'
import './App.css';



import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const { Title } = Typography;

const {Header,Footer,Sider,Content } = Layout;


class Head extends React.Component {
    render(){
  return (

      <div className = "Sha">
      <Layout>
        Shalitha
      <div className= "a">
      <FacebookOutlined />
      </div>
      </Layout>
     
      
      

      </div>
    
  );
}
}

export default Head;