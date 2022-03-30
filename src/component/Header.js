import { Button, Dropdown, Menu, message, Space } from 'antd';
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    let navigate = useNavigate();

    function handleMenuClick(e) {
        if (e.key === '1'){
            navigate('/login');
        }
        else if (e.key === '2'){
            navigate('/register');
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Log In
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                Register
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
            </Menu.Item> */}
        </Menu>
    );

    return (
        <div className="site-page-header" >
            <p className="text_header" onClick={()=>navigate('/')}>Quizz App</p>
            <div className="user_header">
                <Space>
                    <Dropdown overlay={menu}>
                        <Button>
                            Account <DownOutlined />
                        </Button>
                    </Dropdown>
                </Space>
            </div>
        </div>
    )
}
