import { Products } from "../../app/models/products";


export default function Catalog({products, addProduct}: Props) {
    return <>
        {products.map((product) => (
            <ul key={product.id}>
                <li>{product.name} - {product.price}</li>
            </ul>
        ))}
        <p></p>
        <button onClick={addProduct}>Add Product</button>
    </>
}

// these properties are required
// to be passed down from the parent component

interface Props {
    products: Products[];
    addProduct: () => void;
}