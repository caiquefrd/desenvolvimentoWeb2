import { Provedor } from "./contexts/Contexto";
import A from "./components/Input";
import Output from "./components/Output";
import Input from "./components/Input";

function App() {
  // 2o ponto: escopo do contexto
  return (
    <>
      <Provedor>
        < Input />
        < Output />
      </Provedor>
    </>
  );
}

export default App;
