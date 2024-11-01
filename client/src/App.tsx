import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    { name: 'product1', price: 100 },
    { name: 'product2', price: 200 }
  ]);
  const [error, setError] = useState(null);

  function addProduct() {
    setProducts(preState =>
      [...preState,
      {
        name: 'product' + (preState.length + 1),
        price: (preState.length * 100) + 100
      }
      ]
    )
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => setError(error));
  }, [])


  return (
    <>
      <div>
        <h1>ReStore</h1>
        {products.map((item, index) => (
          <ul key={index}>
            <li>{item.name}</li>
          </ul>
        ))}
        <p></p>
        <button onClick={addProduct}>Add Product</button>
      </div>
    </>
  )
}

export default App
