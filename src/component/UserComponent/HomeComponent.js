import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { useGlobalContext } from '../../context/globalContext';
import { useNavigate } from 'react-router-dom';

export const HomeComponent = () => {
    const { numberQuestion, setNumberQuestion } = useGlobalContext();
    const navigator =useNavigate();

    const handleInputNumber = () => {
        navigator('/quizQuestion') 
    }

    return (
        <div className="home">
            <p className="hello_text">Welcome To Quizz App</p>
            <p>Input number questions of test</p>
            <Input.Group compact>
                <Input min="1" type="number" value={numberQuestion} onChange={e => setNumberQuestion(e.target.value)} style={{ width: '100px' }} />
                <Button onClick={handleInputNumber} type="primary">Enter</Button>
            </Input.Group>
        </div>
    )
}
