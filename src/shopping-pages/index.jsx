import Header from '../shopping-pages/header';
import Footer from '../shopping-pages/footer';
import Home from '../shopping-pages/home';
import { Route, Routes } from 'react-router-dom';
import Contact from '../shopping-pages/contact';
import FavoriteProducts from '../shopping-pages/favorite-products';
import ShopBasket from '../shopping-pages/shop-basket-page';
import ProductDetales from '../shopping-pages/product-detales';
import Login from '../registration/login';
import { useState } from 'react';
import Register from '../registration/register';


function ShoppingPage() {
    const [correntForm, setCorrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCorrentForm(formName)
    }
    return <>
        {
            // correntForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }

        <Header />
        <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/favorite"} element={<FavoriteProducts />} />
            <Route path={"/shop"} element={<ShopBasket />} />
            <Route path={"/product"} element={<ProductDetales />} />


            <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
    </>
}

export default ShoppingPage;
