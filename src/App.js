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
  const [token,setToken] = useState(JSON.parse(localStorage.getItem('token')) || null)
  const register = async() =>{
    try {
      // const {data} = await axios("https://php-server-repl-api.samueliso.repl.co/api/users",{headers:{"Authorization":`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJzaGEyNTYifQ.eyJzdWIiOjUsImV4cCI6MTY3MzU3MzE4N30.VTcwV1ROalV5dWptZm9yQlQ5Zy1rTk5hUnFudmkwOG1kZW0xZk96d0ZUVQ`}})
    //   const {data} = await axios.post("https://php-server-repl-api.samueliso.repl.co/api/users",{first_name:'dukkias',last_name:'apps',email:"dukkiaapps@gmail.com",phone:"87678754677",password:'dukkia'},{headers:{"Content-Type":"application/x-www-form-urlencoded",
    // "Authorization":`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJzaGEyNTYifQ.eyJzdWIiOjUsImV4cCI6MTY3MzU3MzE4N30.VTcwV1ROalV5dWptZm9yQlQ5Zy1rTk5hUnFudmkwOG1kZW0xZk96d0ZUVQ`}})
      // const {data} = await axios.post("https://php-server-repl-api.samueliso.repl.co/api/auth/login",{email:"hello@techassembly.co",password:"sasa"},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  useEffect(()=>{
    register()
  },[])
  
  return (
    <Layout>
      <Main>
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='goldbars' element={<Goldbars/>}/>
          <Route path='open-account' element={<Openaccount/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='goldbars/buy/:id' element={<Singlegoldbar order='Buy' />}/>
          <Route path='verification' element={<Verfication/>}/>
          <Route element={<Protected/>}>
            <Route path='dashboard' element={<Dashboard token= {token}/>}/>
          </Route>
          <Route path='goldbars/sell/:id' element={<Singlegoldbar order='Sell'/>}/>
          <Route path='poolallocated' element={<Poolallocated/>}/>
          <Route path='goldcoins' element={<Goldcoins/>}/>
          <Route path='goldcoins/buy/:id' element={<Singlecoin order='Buy' />}/>
          <Route path='goldcoins/sell/:id' element={<Singlecoin order='Sell'/>}/>
        </Routes>
      </Main>
    </Layout>
  );
}

export default App;

const Main = styled.main`
/* background-color: whitesmoke; */


`
