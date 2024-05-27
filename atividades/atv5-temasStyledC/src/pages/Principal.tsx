import Rotas from "../routes";
import PrincipalApp from "../components/PrincipalApp";
import { useLoteria } from "../hooks";

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

// .principal-carregando {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
//   font-family: roboto;
// }



