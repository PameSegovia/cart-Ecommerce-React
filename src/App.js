import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';



function App() {
  return ( 
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/cart" element={<CartContent/>}/>
      
      </Routes>
    </BrowserRouter>
  </DataProvider>
    
  )
}


export default App;