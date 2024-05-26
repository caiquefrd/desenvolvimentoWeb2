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

import Rotas from "../routes";
import PrincipalBloco from "../components/PrincipalBloco";
import { useLoteria } from "../hooks";

export default function Principal() {
  const { megasena, timemania, quina } = useLoteria();
  return (
    <PrincipalBloco>
      <Rotas/>
    </PrincipalBloco>
  )
}

