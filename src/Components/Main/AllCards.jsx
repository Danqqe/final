import {Stack} from 'react-bootstrap';
import CardProd from './CardProd';
import './AllCards.css'

function AllCards({addProdToCart}) {
    let teas=[
        {id: 1, name:"Творог из масла", cost:"250", img:"./img/1026565428.jpg"},
        {id: 2, name:"Твороженное счастье", cost:"350", img:"./img/244272_3.jpeg"},
        {id: 3, name:"Обычный Творог", cost:"150", img:"./img/2966104.jpg"},
        {id: 4, name:"Твороженная любовь", cost:"220", img:"./img/1621702830_2-phonoteka_org-p-tvorog-fon-2.jpg"},
        {id: 5, name:"Детский Творог", cost:"150", img:"./img/1662558353_g-12.jpg"},
        {id: 6, name:"Что Такое Творог Почему", cost:"235", img:"./img/1662558393_g-10.jpg"},
        {id: 7, name:"Твороген", cost:"360", img:"./img/1662558396_g-85.jpg"},
        {id: 8, name:"НивеаГен", cost:"400", img:"./img/1663764395_3-mykaleidoscope-ru-p-tvorog-derevenskii-yeda-pinterest-3.jpg"},
        {id: 9, name:"Творогенурий", cost:"240", img:"./img/e0e6e498d8e0e8f8.png"},
        {id: 10, name:"Дедов Способ", cost:"599", img:"./img/orig.webp"},
        {id: 11, name:"Рог Твороженный", cost:"205", img:"./img/osobennosti-upotrebleniya-tvoroga-pri-beremennosti-i-grudnom-vskarmlivanii.jpg"},
        {id: 12, name:"Отсталый Творог", cost:"145", img:"./img/post_57f78dc5a17e5.jpg"},
        {id: 13, name:"Слон На Твороге", cost:"350", img:"./img/ru_pim_373389001001_01.png"},
        {id: 14, name:"Товорогунериений", cost:"325", img:"./img/tvorog_i_yagodi_1.jpg"},
        {id: 15, name:"Что Такое Творог Иди ", cost:"200", img:"./img/tvorog-9-proc-400-2019-copmoz.jpg"},
    ]
    let cards=teas.map(tea =>{
        return <CardProd name={tea.name} cost={tea.cost} img={tea.img} addProdToCart={(newProd) => addProdToCart(newProd)}/>
    })
    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3} className="class">
            <h1  className="textofglav">All Curds</h1>
            <input className="ms-auto" placeholder='Поиск 🔎 '/>
        </Stack>

        <div className="Cards">
            {cards}
        </div>
</div>
    );
}

export default AllCards;