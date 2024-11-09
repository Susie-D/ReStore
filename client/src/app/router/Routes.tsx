import { ContactPage } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../../components/about/AboutPage";
import Catalog from "../../components/catalog/Catalog";
import ProductDetails from "../../components/catalog/ProductDetails";
import HomePage from "../../components/home/HomePage";
import App from "../layout/App";

export const router = createBrowserRouter(
    [{
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'catalog/:id', element: <ProductDetails /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
        ]
    }]
);