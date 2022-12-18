import styled from 'styled-components';
import Layout from './Components/Layout';
import Products from './Components/Products';
import { Routes, Route} from 'react-router-dom'
import Openaccount from './Components/Openaccount';
import Goldbars from './Components/Goldbars';
import Singlegoldbar from './Components/Singlegoldbar';

function App() {
  return (
    <Layout>
      <Main>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='open-account' element={<Openaccount/>}/>
          <Route path='goldbars' element={<Goldbars/>}/>
          <Route path='goldbars/buy/:id' element={<Singlegoldbar order='buy' />}/>
          <Route path='goldbars/sell/:id' element={<Singlegoldbar order='sell'/>}/>
        </Routes>
      </Main>
    </Layout>
  );
}

export default App;

const Main = styled.main`
background-color: whitesmoke;


`
