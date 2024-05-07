import Block from "../Block";
import Input from "../Input";
import Tittle from "../Tittle";
import Line from "../Line";

export default function CMYKColor() {
  return (
    <Block>
      <Tittle>CMYK - Cyan, Magenta, Amarelo, Preto</Tittle>
      <Line>
        <Input label="Ciano" />
        <Input label="Magenta" />
        <Input label="Amarelo" />
        <Input label="Preto" />
      </Line>
    </Block>
  );
}
