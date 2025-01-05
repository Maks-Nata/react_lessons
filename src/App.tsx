import './App.css'
import {products} from "./components/data/productlist.ts";
import MyProducts from "./components/my-products/myProducts.tsx";

function App() {


  return (

      <>
        {products.map((product,index)=><MyProducts key={index} product={product}/>)}
        </>

  )
}

export default App
