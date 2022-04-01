import { Button, Pagination } from 'antd';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteQuestionById, getQuestionAdmin } from '../../apis/data-api';

export const AdminDashboard = () => {
    const navigator = useNavigate()
    const [listQuestion, setListQuestion] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getQuestionAdmin(page, 10).then(data => setListQuestion(data))
    })

    const onChangePage = (pageNum) => {
        setPage(pageNum);
    }

    const handleAddQ = () =>{
        navigator('/addQuestion')
    }

    const handleEditQ = (id) =>{
        navigator(`/editQuestion/${id}`)
    }

    const handleDeleteQ = (id) =>{
        deleteQuestionById(id)
        navigator('/addQuestion')
    }

    return (
        <div style={{ 'margin': '50px 100px' }}>
            <Button onClick={handleAddQ} style={{ 'float': 'right', 'margin': '10px 0 20px' }} type="primary">Add Question</Button>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Question</th>
                    <th>Answer1</th>
                    <th>Answer2</th>
                    <th>Answer3</th>
                    <th>Answer4</th>
                    <th>Correct Answer</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {listQuestion.results && listQuestion.results.map((data, index) => (
                    <tr key={index} >
                        <td>{data.id}</td>
                        <td>{data.question}</td>
                        <td>{data.answer1}</td>
                        <td>{data.answer2}</td>
                        <td>{data.answer3}</td>
                        <td>{data.answer4}</td>
                        <td>{data.correctanswer}</td>
                        <td><Button onClick={()=>handleEditQ(data.id)} value="small" >Edit</Button></td>
                        <td><Button onClick={()=>handleDeleteQ(data.id)} danger value="small">Delete</Button></td>
                    </tr>
                ))}
            </table>
            <Pagination style={{ 'float': 'right', 'marginTop': '30px' }} defaultCurrent={1} onChange={onChangePage} total={listQuestion.totalResults} pageSize={10} />
        </div>
    )
}
