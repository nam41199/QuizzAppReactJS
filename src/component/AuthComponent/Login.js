import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { loginAccount } from '../../apis/data-api';
import { useGlobalContext } from '../../context/globalContext';

export const Login = () => {
    const navigator = useNavigate()
    const {  setUser } = useGlobalContext()
    const onFinish = async (values) => {
        const userLogin = {
            username: values.username,
            password: values.password
        }
        const token = await loginAccount(userLogin)
        localStorage.setItem('token', token.tokens.access.token)
        setUser(token.user)
        localStorage.setItem("expires", token.tokens.access.expires);
        localStorage.setItem(
            "refreshToken",
            token.tokens.refresh.token
        );
        navigator('/home')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login_page_size">
            <p className="login_title">Login</p>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};
