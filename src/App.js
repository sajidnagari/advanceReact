
import Home from "./containers/home"
import { useGlobalState } from "./globalContext/globalContext";

function App() {
const { setUser, user, setCount , count} = useGlobalState()

  return (
    <div className="App">
       <Home  />
      <br/>
      <button  onClick={() => setUser('Ejaz')}>
         Ejaz
      </button>
      <button style={{margin : "20px"}} onClick={() => setUser('Sajad')}>
         Sajad
      </button>
      <button onClick={() => setUser('Qamar')}>
         Qamar
      </button>
      <p> Name : {user}</p>

      <button onClick={() => setCount(10)}>
         Count {count}
      </button>
    </div>
  );
}

export default App;
