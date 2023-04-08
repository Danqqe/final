import {Card, Stack,Button} from 'react-bootstrap';
import CardProd from '../Main/AllCards';
import { Route,Routes } from 'react-router-dom';
import { Link, } from "react-router-dom";
import CartItem from '../Cart/CartItem';
import './Profile.css'





function Zakladki(props,tea){
    let teas=[
        {id: 1, name:"Мистер Пропер", cost:"430₽/унция", img:"./img/supplies-1.png"},
        {id: 2, name:"Негр обыкновенный", cost:"755₽/унция", img:"./img/supplies-2.png"},
        {id: 3, name:"Негр необыновенный", cost:"800₽/унция", img:"./img/supplies-3.png"},
        {id: 4, name:"АК-46 без магазина", cost:"210₽/унция", img:"./img/supplies-4.png"},
        {id: 5, name:"Цветочный лох «Катрин Денев»", cost:"430₽/унция", img:"./img/supplies-5.png"},
        {id: 6, name:"Сливочный чай «Молочный Улун»", cost:"755₽/унция", img:"./img/supplies-6.png"},
        {id: 7, name:"Пу Эр «Дикий»", cost:"800₽/унция", img:"./img/supplies-7.png"},
        {id: 8, name:"Черный чай «Трое в Нивеа»", cost:"210₽/унция", img:"./img/supplies-8.png"},
        {id: 9, name:"АК-76 без патронников", cost:"430₽/унция", img:"./img/supplies-9.png"},
        {id: 10, name:"Кокаин", cost:"755₽/унция", img:"./img/supplies-10.png"},
        {id: 11, name:"Рог носорога", cost:"800₽/унция", img:"./img/supplies-11.png"},
        {id: 12, name:"Отсталый ребёнок", cost:"210₽/унция", img:"./img/supplies-12.png"},
        {id: 13, name:"Корова на скейте", cost:"800₽/унция", img:"./img/supplies-13.jpg"},
        {id: 14, name:"Фрукты Обэмэ", cost:"210₽/унция", img:"./img/supplies-14.webp"},
        {id: 15, name:"Рука", cost:"210₽/унция", img:"./img/supplies-15.webp"},
    ]
    let cards = props.favor.map(tea => {
        return <><CartItem cost={tea.cost} name={tea.name} img={tea.img} /></>
      })
    
    return <> <div className="MainContent" style={{paddingLeft:"10px",paddingRight:"10px"}}>
    <Stack direction="horizontal" gap={3} className="class">
        <h1 style={{color:"black"}}>ALL CURDS</h1>

        <Link to="/" className='ms-auto'><Button variant="outline-light" className="ms-auto">На главную</Button></Link>
    </Stack>
    <div className="ponos22">
            {cards}
        </div>
    </div> </>;

}
export default Zakladki;