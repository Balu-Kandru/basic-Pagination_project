import Products from './components/products';
import './App.css';
import { useState } from 'react';


function App() {
  const [category,setCategory]=useState("")
  return (
    <div className="App">
      <header className="App-header">Available Products</header>
      <select  onChange={(e) => setCategory(e.target.value)} >
        <option value={"men's clothing"} >select</option>
        <option value={"electronics"} >Electronics</option>
        <option value={"jewelery"} >jewelery</option>
        <option value={"men's clothing"} >men's clothing</option>
        <option value={"women's clothing"} >women's clothing</option>
      </select>
      <Products category={category} />
    </div>
  );
}

export default App;
