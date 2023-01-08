import styled from 'styled-components';
import Layout from './Components/Layout';
import Products from './Components/Products';
import { Routes, Route} from 'react-router-dom'
import Openaccount from './Components/Openaccount';
import Goldbars from './Components/Goldbars';
import Singlegoldbar from './Components/Singlegoldbar';
import Poolallocated from './Components/Poolallocated';
import Goldcoins from './Components/Goldcoins';
import Singlecoin from './Components/Singlecoin';
import axios from 'axios';
import { useEffect } from 'react';
function App() {
  // const register = async() =>{
  //   try {
  //     const {data} = await axios.post("/api/users/create",{first_name:"John",last_name:"Doe",email:"dukia@gmail.com",password:"dukia"})
  //     console.log(data);
  //     console.log("hi");
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // }
  // register()
  return (
    <Layout>
      <Main>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='open-account' element={<Openaccount/>}/>
          <Route path='goldbars' element={<Goldbars/>}/>
          <Route path='goldbars/buy/:id' element={<Singlegoldbar order='Buy' />}/>
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
