import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalContext';

export const Results = () => {
    const {result} = useParams()
    const {numberQuestion} = useGlobalContext()
    const navigator = useNavigate()
    return (
        <Result
            status="success"
            title={`Your Score : ${result} / ${numberQuestion}`}
            subTitle="Successfully Submited Test !"
            extra={[
                <Button type="primary" key="console" onClick={()=>navigator("/home")}>
                    Again
                </Button>,
            ]}
        />
    )
}
