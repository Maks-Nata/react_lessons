import './App.css'
import MyComponent from "./components/myComponent.tsx";

function App() {


  return (
      <> <MyComponent title={'hello'}>
        react and vite
      </MyComponent>
        <MyComponent title={'Good Afternoon'}/>
      {MyComponent({title:'hello react'})}
    </>
  )
}

export default App
