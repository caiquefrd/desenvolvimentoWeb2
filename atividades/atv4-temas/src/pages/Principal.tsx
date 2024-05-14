import Megasena from "../components/Ball";
import { useLoteria } from "../hooks";
import "./index.css";

export default function Principal() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Megasena />
        </div>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
