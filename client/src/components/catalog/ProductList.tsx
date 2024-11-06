import { List } from "@mui/material";
import { Products } from "../../app/models/products";
import ProductCard from "./ProductCard";

export default function ProductList({products} : Props) {
    return (
        <>
            <List>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product}/>
                ))}
            </List>
        </>
    )
}

interface Props {
    products: Products[];
}
