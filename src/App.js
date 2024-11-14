import { ProductCard } from "./components/productCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    category: "Category 1",
    img: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__gben_2.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    category: "Category 2",
    img: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__gben_2.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    category: "Category 3",
    img: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__gben_2.png",
  },
]

function App() {
  return (
    <div>
      {products.map((product) => 
        (< ProductCard data={product} />))}
    </div>
  );
}

export default App;
