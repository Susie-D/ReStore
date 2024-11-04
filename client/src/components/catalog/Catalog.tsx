import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Products } from "../../app/models/products";


export default function Catalog({products, addProduct}: Props) {
    return <>
        {products.map((product) => (
            <ul key={product.id}>
                <ListItem key={product.id}>
                    <ListItemAvatar>
                    <Avatar src={product.pictureUrl}/>
                    </ListItemAvatar>
                    <ListItemText>{product.name} - {product.price}</ListItemText>
                </ListItem>
            </ul>
        ))}
        <p></p>
        <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </>
}

// these properties are required
// to be passed down from the parent component

interface Props {
    products: Products[];
    addProduct: () => void;
}