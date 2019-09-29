import { Layout, Menu } from 'antd';
import SiderMenu from '@/components/SiderMenu';

const { Header, Footer, Content } = Layout;

function BasicLayout(props) {
  return (
    <Layout>
      <Header>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <SiderMenu/>
        <Content>{props.children}</Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>©2019 Created by </Footer>
    </Layout>
  );
}

export default BasicLayout;
