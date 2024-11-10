import { useEffect, useState } from "react";
import { Products } from "../../app/models/products";
import ProductList from "./ProductList";


export default function Catalog() {

  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => setError(error));
  }, [])
  return (<>
    {(error) ? <p>There an error in retrieving the inventory.</p> : <ProductList products={products} />}
  </>)
}
