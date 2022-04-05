import { Button, Dropdown, Menu, message, Space } from 'antd';
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/globalContext';
import Text from 'antd/lib/typography/Text';

export const Header = () => {
    let navigate = useNavigate();
    const { user,setUser } = useGlobalContext();

    function handleMenuClick(e) {
        if (e.key === '1') {
            navigate('/login');
        }
        else if (e.key === '2') {
            navigate('/register');
        }
        else if (e.key === '3') {
            localStorage.clear();
            setUser({})
            navigate('/login');
        }
    }

    const menuUnAuth = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Log In
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                Register
            </Menu.Item>
        </Menu>
    );

    const menuAuth = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="3" icon={<UserOutlined />}>
                Log Out
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="site-page-header" >
            <p className="text_header" onClick={() => navigate('/home')}>Quizz App</p>
            <div className="user_header">
                <Space>
                    {user.role ?
                        <Dropdown overlay={menuAuth}>
                            <Button>
                                <Text type="success">{user.username}</Text> <DownOutlined />
                            </Button>
                        </Dropdown>
                        :
                        <Dropdown overlay={menuUnAuth}>
                            <Button>
                                Account <DownOutlined />
                            </Button>
                        </Dropdown>
                    }

                </Space>
            </div>
        </div>
    )
}
