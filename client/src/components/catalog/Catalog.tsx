import {  Button } from "@mui/material";
import { Products } from "../../app/models/products";
import ProductList from "./ProductList";


export default function Catalog({ products, addProduct }: Props) {
    return <>
        <ProductList products={products}/>
        <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </>
}

// these properties are required
// to be passed down from the parent component

interface Props {
    products: Products[];
    addProduct: () => void;
}