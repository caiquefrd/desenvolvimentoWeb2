import Rotas from "../routes";
import PrincipalApp from "../components/PrincipalApp";

export default function Principal() {
  return (
    <PrincipalApp>
      <Rotas/>
    </PrincipalApp>
  )
}

// import { useLoteria } from "../hooks";
// import Rotas from "../routes";
// import "./index.css";

// export default function Principal() {
//   const { megasena } = useLoteria();

//   return (
//     <>
//       {megasena.dataApuracao ? (
//         <div className="principal-bloco">
//           <Rotas/>
//         </div>
//       ) : (
//         <div className="principal-carregando">
//           <h3>Carregando...</h3>
//         </div>
//       )}
//     </>
//   );
// }



