import './App.css';
import { Routes,Route } from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import {loginAction} from './actions/userAction'
import {useDispatch} from 'react-redux'
import React, { useEffect } from 'react';
import Axios from 'axios';
import Products from './pages/Products';
import { API_URL } from "./helper/utils";
import Detail from './pages/Detail';
function App() {
  const [loading, setLoading] = React.useState(false)

  const dispatch = useDispatch()

  const keepLogin = () =>{
    setLoading(true)
    let getLocalStorage = JSON.parse(localStorage.getItem('eshop_login'))
    
    if(getLocalStorage?.id){
      Axios.get(API_URL+`/user?id=${getLocalStorage.id}`)
      .then((res)=>{
          delete res.data[0].password;
          dispatch(loginAction(res.data[0])); // menjalankan fungsi action
          localStorage.setItem('eshop_login',JSON.stringify(res.data[0]))
          setLoading(false)
      }).catch((err)=>{
          console.log(err)
          setLoading(false)
      })
    }else{
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    keepLogin()
    // eslint-disable-next-line
  },[])

  return (
    <>
        <div style={{display:"flex",flexDirection:'column', minHeight:"100vh",height:"100%" ,margin:0}}>
          <Navbar loading={loading} />
          <Routes >
                <Route path='/' element={<Landing/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/detail' element={<Detail/>} />
                <Route path='/*' element={<Landing/>} />
          </Routes>
          <Footer />
        </div>
    </>
  );
}

export default App;
