import NewUser from "./pages/NewUser/NewUser";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productDetail/ProductDetail";
import UserList from "./pages/users/UserList";

let routers=[
    {path:'/',element:<Home/>},
    {path:'/users',element:<UserList/>},
    {path:'/newuser',element:<NewUser/>},
    {path:'/products',element:<Product/>},
    {path:'/product/:productID',element:<ProductDetail/>}
]

export default routers