
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar/Menubar';
import AllProduct from './Component/All Product/AllProduct';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1)
  };
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProduct setCartCount={setCartCount}></AllProduct>


    </div>
  );
}

export default App;
