import './Shop.css';
import ShoppingCart from './ShoppingCart';
const {useEffect, useState} = require('react');
const photoExample = require('../assets/img/Reebok Nano 9.jpg')
const Shop = () =>{
const [data, setNewData] = useState([]);
const [isCartVisible,setCartVisible] = useState(false);

const [cart,setCart] = useState([]);

  useEffect(()=>{
  
    const getShoes = async () =>{
        try {
        
          const response = await fetch("http://127.0.0.1:9999/api/product/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
  
          console.log( arreglo[0]);
          setNewData(arreglo[0]);

  
        } catch (error) { 
         console.log('We have a problem for obtain the users'); 
        }
    };
  
    getShoes();
  
  
  }, []);

  const add = (item) => {
    setCart([...cart,item]);
    console.log(cart);
  }

  const remove = (item) => {
    const updateCart = cart.filter(cart => cart !== item);
    setCart(updateCart);
  }

return(  
    <div className="containerApp">
        <button className='btn btn-primary mb-5' onClick={()=>setCartVisible(!isCartVisible)}>
            {isCartVisible ? 'Close Cart' : 'Open Cart' }
        </button>
        {isCartVisible && ( <ShoppingCart  photo={photoExample} items={cart} onRemove={remove}></ShoppingCart>)}
        <div className="fake">
        {data.map((item,i)=>(
            <div  key={i} className="card" style={{ width: '18rem' }}>
              <img src={photoExample} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.model}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary" onClick={()=>add(item)}>Add +</button>
              </div>
            </div>
        ))    
        }

    </div>
        </div>
)
};

export default Shop;