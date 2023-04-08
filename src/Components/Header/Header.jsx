import "./Header.css"
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";


function Header(props) {
  let summ = 0
  for (let i = 0; i < props.cart.length; i++) {
    summ += Number(props.cart[i]['cost']);
  }
  

  return<div className="mainHeader"><Stack direction="horizontal" gap={3}>
  <div className='leftHeader'>
  <img src="/img/free-icon-curd-403586 1.png"style={{"marginTop": "20px"}} width={40} height={40}/>
    <div className='leftHeaderText'>
    <Link to="/" style={{ textDecoration: 'none' }}>    <h2 style={{"color": "white"}}  className="headertext1" >Shop of Curds</h2>
    <p style={{"color": "#9D9D9D"}} className="headertext" >Магазин лучшего и наивкуснейшего творога</p></Link>
    </div>
    </div>

    <div className='rightHeader ms-auto'>
    <img src="/img/Group.svg" className="headerpodtext" width={20} height={20} onClick={() =>props.onCloseCart()}/>
    <span style={{"color": "#5C5C5C"}} className="headerpodtext" >{summ} р.</span>
    <Link to="/zakladki">
     <img src="/img/free-icon-hearts-138533 1.png" className="headerpodtext" width={20} height={20}/>
    </Link>
    <Link to="/profile">
    <img src="/img/1315_2023_01_29_1_ 14.png"  className="headerpodtext" width={20} height={20}/>
    </Link>
    </div>
    </Stack>

</div>
  
    
  ;

}
export default Header
