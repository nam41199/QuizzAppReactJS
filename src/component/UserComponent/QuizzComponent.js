import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { Card, Col, Row, Radio, Button } from 'antd';
import { useEffect, useState } from 'react';
import { getQuestion } from '../../apis/data-api';
import { useGlobalContext } from '../../context/globalContext';
import { useNavigate } from 'react-router-dom';

export const QuizzComponent = () => {
    const [listQuestion, setListQuestion] = useState([]);
    const { numberQuestion } = useGlobalContext();
    const [index, setIndex] = useState(0);
    const navigator = useNavigate()

    useEffect(() => {
        getQuestion(numberQuestion).then(data => setListQuestion(data))
    })
    const handlePre = () => {
        setIndex(index - 1);
    }
    const handleNext = () => {
        setIndex(index + 1);
    }
    const handleSubmit = () => {
        navigator('/result ')
    }
    return (
        <div>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={6}>
                    </Col>
                    <Col span={12}>
                        {listQuestion.results &&
                            <Card title={listQuestion.results[index].question} bordered={false}>
                                <Radio.Group name="radiogroup" defaultValue={1}>
                                    <Radio value={listQuestion.results[index].answer1}>{listQuestion.results[index].answer1}</Radio>
                                    <Radio value={listQuestion.results[index].answer2}>{listQuestion.results[index].answer2}</Radio>
                                    <Radio value={listQuestion.results[index].answer3}>{listQuestion.results[index].answer3}</Radio>
                                    <Radio value={listQuestion.results[index].answer4}>{listQuestion.results[index].answer4}</Radio>
                                </Radio.Group>
                            </Card>
                        }

                        <Row >
                            <Col span={12}>
                                <Button className={index === 0 ? 'unable_button' : null} type="primary" onClick={handlePre}>Previous</Button>
                            </Col>
                            <Col span={12}>
                                {index === numberQuestion - 1 ?
                                    <Button type="primary" onClick={handleSubmit}>Submit</Button> 
                                    :
                                    <Button className={index === numberQuestion - 1 ? 'unable_button' : null} type="primary" onClick={handleNext}> Next </Button>
                                }
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
