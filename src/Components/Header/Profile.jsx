
import { Routes, Route, Link } from 'react-router-dom';
import {Stack} from 'react-bootstrap';
import './Profile.css'
import Button from 'react-bootstrap/Button';

function Profile(){
    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3} className="class">
            <h1  className="textofglav">All Curds</h1>
            <input className="ms-auto" placeholder='Поиск 🔎 '/>
        </Stack>
        <div className='profilecss'>
        <img className="profilecss1" src='./img/1315_2023_01_29_1_ 8.png'/>
        </div>
        <div className='tert'>
            <h3 className='tert'></h3>
            <h5 className='tert'>Say hay to Egor</h5>
        </div>
        <div>
        <Link to="/">
        <Button variant="outline-dark" className='buttononclick' class="ms-auto">Вернуться назад</Button>
        </Link>
        </div>
        </div>)
}

export default Profile;