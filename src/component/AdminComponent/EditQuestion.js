import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate, useParams } from 'react-router-dom';
import {  editQuestionById, getQuestionById } from '../../apis/data-api';
import { useEffect, useState } from 'react';

export const EditQuestion = () => {
    const navigator = useNavigate()
    const {id} = useParams()
    const [questionById,setQuestionById] = useState();

    useEffect(() => {
        getQuestionById(id).then((data) =>setQuestionById(data))
    })

    const onFinish = async (values) => {
        const question = {
            question: values.question,
            answer1: values.answer1,
            answer2: values.answer2,
            answer3: values.answer3,
            answer4: values.answer4,
            correctanswer: values.correctanswer,
        }
        await editQuestionById(id,question)
        setTimeout(() => {
            navigator('/home')
        })

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login_page_size">
            <p className="login_title">Edit Question</p>
            {questionById && 
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{ 
                    question: questionById.question,
                    answer1: questionById.answer1,
                    answer2: questionById.answer2,
                    answer3: questionById.answer3,
                    answer4: questionById.answer4,
                    correctanswer: questionById.correctanswer,
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
            }
            
        </div>
    )

}
