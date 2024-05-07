import Block from "../Block";
import Input from "../Input";
import Tittle from "../Tittle";
import Line from "../Line";

export default function HSLAcolor() {
  return (
    <Block>
      <Tittle>HSLA - Hue, Saturation, Lightness, Alpha </Tittle>
      <Line>
        <Input label="Matiz" />
        <Input label="Saturação" />
        <Input label="Luminosidade" />
        <Input label="Transparência" />
      </Line>
    </Block>
  );
}
