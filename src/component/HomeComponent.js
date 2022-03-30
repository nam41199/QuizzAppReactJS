import 'antd/dist/antd.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { getQuestion } from '../apis/data-api';

export const HomeComponent = () => {
    useEffect(() => {
        getQuestion().then(data=>console.log(data))
    })
    return (
        <div className="home">
            <p className="hello_text">Welcome To Quizz App</p>
            <p>Choose number questions of test</p>           
            <Button size={1}>3</Button>&nbsp;
            <Button size={1}>5</Button>&nbsp;
            <Button size={1}>10</Button>
        </div>
    )
}
