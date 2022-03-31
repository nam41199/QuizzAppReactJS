import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';

export const Results = () => {
    return (
        <Result
            status="success"
            title=" Your score: ??? "
            subTitle="Successfully Submited Test !"
            extra={[
                <Button type="primary" key="console">
                    Again
                </Button>,
            ]}
        />
    )
}
