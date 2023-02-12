import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminPage from './admin-page';
import ShoppingPage from './shopping-pages';


function App() {
  const { pathname } = useLocation()
  const [token, setToken] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const user = localStorage.getItem('token-user')
    if (user) {
      setToken(user)
      navigate('/category-admin')

    }
  }, [])

  return <>
    {token ? <AdminPage /> : <ShoppingPage />}
  </>
}

export default App;
