import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';

export const Results = () => {
    const navigator = useNavigate()
    return (
        <Result
            status="success"
            title=" Your score: ??? "
            subTitle="Successfully Submited Test !"
            extra={[
                <Button type="primary" key="console" onClick={()=>navigator("/home")}>
                    Again
                </Button>,
            ]}
        />
    )
}
