import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Products } from "../../app/models/products";

export default function ProductCard({ product }: Props) {

    // const [products, setProducts] = useState<Products[]>([]);

    // function addProduct() {
    //     setProducts(prevState => [...prevState,
    //             {
    //                 id: prevState.length + 101,
    //                 name: 'product' + (prevState.length + 1),
    //                 price: (prevState.length * 100) + 100,
    //                 brand: 'some brand',
    //                 description: 'some description',
    //                 type: '',
    //                 pictureUrl: 'http://picsum.photos/200'
    //             }
    //         ]
    //     )
    // }

    return (
        <Card>
            <CardHeader
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: 'primary.main' }
                }}
                avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
            />
            <CardMedia
                sx={{ height: 150, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5" component="div">
                    ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Add to Cart
                    Add Product
                </Button>
            </CardActions>
        </Card>
    )
}


interface Props {
    product: Products;
}