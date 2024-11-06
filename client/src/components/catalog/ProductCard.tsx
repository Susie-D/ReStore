import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { Products } from "../../app/models/products"

export default function ProductCard({ product }: Props) {
    return (
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>{product.name} - {product.price}</ListItemText>
        </ListItem>
    )
}


interface Props {
    product: Products;
}