import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { createQuestion } from '../../apis/data-api';

export const AddQuestion = () => {
    const navigator = useNavigate()

    const onFinish = async (values) => {
        const question = {
            question: values.question,
            answer1: values.answer1,
            answer2: values.answer2,
            answer3: values.answer3,
            answer4: values.answer4,
            correctanswer: values.correctanswer,
        }
        await createQuestion(question)
        setTimeout(() => {
            navigator('/home')
        })

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login_page_size">
            <p className="login_title">Add Question</p>
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
                    label="Question"
                    name="question"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Question!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Answer1"
                    name="answer1"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Answer1!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Answer2"
                    name="answer2"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Answer2!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Answer3"
                    name="answer3"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Answer3!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Answer4"
                    name="answer4"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Answer4!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Correct Answer "
                    name="correctanswer"
                    rules={[
                        {
                            required: true,
                            message: 'Please input exactly the correct answer',
                        },
                    ]}
                >
                    <Input />
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
    )

}
