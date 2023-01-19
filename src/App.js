import styled from 'styled-components';
import Layout from './Components/Layout';
import Products from './pages/Products';
import { Routes, Route} from 'react-router-dom'
import Openaccount from './pages/Openaccount';
import Goldbars from './pages/Goldbars';
import Singlegoldbar from './pages/Singlegoldbar';
import Poolallocated from './pages/Poolallocated';
import Goldcoins from './pages/Goldcoins';
import Singlecoin from './pages/Singlecoin';
import axios from 'axios';
import Login from './pages/Login'
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import Verfication from './pages/Verfication';
import Protected from './Components/Protected';
function App() {
 
  const register = async() =>{
    try {
      // const {data} = await axios("https://php-server-repl-api.samueliso.repl.co/api/users",{headers:{"Authorization":`Bearer`}})
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  useEffect(()=>{
    register()
  },[])
  
  return (
    <Main>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Products />}/>
          <Route path='goldbars' element={<Goldbars/>}/>
          <Route path='open-account' element={<Openaccount/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='goldbars/buy/:id' element={<Singlegoldbar order='Buy' />}/>
          <Route path='goldbars/sell/:id' element={<Singlegoldbar order='Sell'/>}/>
          <Route path='poolallocated' element={<Poolallocated/>}/>
          <Route path='goldcoins' element={<Goldcoins/>}/>
          <Route path='goldcoins/buy/:id' element={<Singlecoin order='Buy' />}/>
          <Route path='verification' element={<Verfication/>}/>
          <Route path='goldcoins/sell/:id' element={<Singlecoin order='Sell'/>}/>
        <Route element={<Protected/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
        </Route>
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.main`
/* background-color: whitesmoke; */


`
