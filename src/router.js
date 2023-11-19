import NewUser from "./pages/NewUser/NewUser";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import UserList from "./pages/users/UserList";

let routers=[
    {path:'/',element:<Home/>},
    {path:'/users',element:<UserList/>},
    {path:'/newuser',element:<NewUser/>},
    {path:'/product',element:<Product/>},
]

export default routers