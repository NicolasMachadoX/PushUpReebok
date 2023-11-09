
function ShoppingCart({photo,items,onRemove}){
  return (
    <div className="ShoppingCart">
      <h1>Wishes Carts</h1>
      <div className='elemnts'>
        {items.length === 0 ? (
          <p>Empty Cart</p>
        ):(
          <ul>
            {items.map((item,i)=>(
              <li className="bodyCart" key={i}>
                <img className="imgCart" src={photo} alt="" />
                {item.model} - ${item.price}
                {"                          "}
                <button className="btn btn-danger" onClick={()=> onRemove(item)}>REMOVE</button>
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}

export default ShoppingCart;
