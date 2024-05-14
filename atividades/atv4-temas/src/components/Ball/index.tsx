import "./index.css";
import { useLoteria } from "../../hooks";

export default function Megasena() {
    const { megasena } = useLoteria();

    return (
        <div className="mega-bloco-direita">
            <div className="mega-linha-bola">
                {
                    megasena.dezenas.map(dezena =>
                        <div className="mega-bola" key={dezena}>{dezena}</div>
                    )
                }
            </div>

        </div>
    );
}

// .mega-bola {
//     font-size: 18px;
//     font-weight: bold;
//     background-color: #209869;
//     color: #fff;
//     border-radius: 25px;
//     padding: 10px;
//     margin: 0px 10px;
// }