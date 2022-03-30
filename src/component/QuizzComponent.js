import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { Card, Col, Row, Radio, Button } from 'antd';

export const QuizzComponent = () => {
    return (
        <div>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={6}>
                    </Col>
                    <Col span={12}>
                        <Card title="Card title" bordered={false}>
                            <Radio.Group name="radiogroup" defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </Radio.Group>
                        </Card>
                        <Row >
                            <Col span={12}>
                            <Button  type="primary">Previous</Button>
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
