import { useEffect, useState } from "react";
import { ProductCard } from "./components/productCard";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(json => setProducts(json))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading && <img className="loading" src="https://i.gifer.com/ZKZg.gif"></img>}
      {error && <div>Error: {error}</div>}
      {products.map((product) => 
        (<ProductCard key={product.id} data={product} />))}
    </div>
  );
}

export default App;
