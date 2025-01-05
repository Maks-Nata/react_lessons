import './App.css'
import MyComponent from "./components/myComponent.tsx";

function App() {


  return (
    <> <MyComponent text={'hello'}/>
      {MyComponent({text:'hello react'})}
    </>
  )
}

export default App
