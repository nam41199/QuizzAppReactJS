import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { Card, Col, Row, Radio, Button } from 'antd';
import { useEffect, useState } from 'react';
import { getQuestion } from '../../apis/data-api';
import { useGlobalContext } from '../../context/globalContext';

export const QuizzComponent = () => {
    const [listQuestion, setListQuestion] = useState([]);
    const { numberQuestion } = useGlobalContext();
    const [index,setIndex] =useState(0);

    useEffect(() => {
        getQuestion(numberQuestion).then(data => setListQuestion(data.results))
    })

    return (
        <div>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={6}>
                    </Col>
                    <Col span={12}>
                        {listQuestion.map((q,index) => (
                            <Card title={q.question} bordered={false}>
                                <Radio.Group name="radiogroup" defaultValue={1}>
                                    <Radio value={1}>{q.answer1}</Radio>
                                    <Radio value={2}>{q.answer2}</Radio>
                                    <Radio value={3}>{q.answer3}</Radio>
                                    <Radio value={4}>{q.answer4}</Radio>
                                </Radio.Group>
                            </Card>
                        ))}

                        <Row >
                            <Col span={12}>
                                <Button type="primary">Previous</Button>
                            </Col>
                            <Col span={12}>
                                <Button type="primary">Next</Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col span={6}>
                    </Col>
                </Row>
            </div>

        </div>

    )
}
