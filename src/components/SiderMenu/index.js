import { useEffect } from 'react';
import { connect } from 'dva';
import { Link } from 'umi';
import { Layout, Menu, Icon } from 'antd';
import _ from 'lodash';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = props => {

  const { dispatch, menuData } = props;

  /**
   * constructor
   */
  useEffect(() => {
    dispatch({
      type: 'menu/fetchMenuData',
    });
  }, [dispatch]);

  return (
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          _.map(menuData, menu => {
            return <SubMenu key={menu.id}
                            title={
                              <span>
                                  <Icon type={menu.icon}/>
                                {menu.name}
                                </span>
                            }
            >

              {
                _.map(menu.children, menuItem => {
                  return <Menu.Item key={menuItem.id}>
                    <Link to={menuItem.url}>{menuItem.name}</Link>
                  </Menu.Item>;
                })
              }
            </SubMenu>;
          })
        }
      </Menu>
    </Sider>
  );
};

export default connect(({ menu }) => ({
  menuData: menu.menuData,
}))(SiderMenu);
