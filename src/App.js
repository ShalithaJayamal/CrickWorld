import React from 'react';
import { Layout, Avatar} from 'antd';
import { Typography } from 'antd';
import './App.css';


import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const {Header,Footer,Sider,Content } = Layout;

function App() {
  return (
    <div className="App">
    
<Layout>


<Header style = {{padding :15}} >
<Avatar style = {{float :'right'}} size={32} icon={<UserOutlined />} />
<Title style = {{color:'white'}} level={2} >Shalith Jayamal</Title>
</Header>
</Layout>
    <Layout>
      <Sider  style={{background:'red'}}>Sider</Sider>
      <Layout>
      <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      </Layout>
  

    
    
    </div>
  );
}

export default App;
