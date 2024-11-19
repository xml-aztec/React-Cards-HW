import "./index.css";

export function ProductCard(props) {
  const { image, category, title, price } = props.data;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
      <div className="product-card">

        <img width={200} height={250} src={image} alt="Iphone 15 Pro Max" />  
        

        <div className="category">{capitalizeFirstLetter(category)}</div>
        <h4 className="title-card">{title}</h4>
          
        <div className="button-block">

          <div className="price-card">${price}</div>
          <button className="add-card">Add to card</button>

        </div>

      </div>


  );
}