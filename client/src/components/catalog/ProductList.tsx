import { Grid } from '@mui/material';
import { Products } from "../../app/models/products";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: Props) {
    return (
        <>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={4}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

interface Props {
    products: Products[];
}
