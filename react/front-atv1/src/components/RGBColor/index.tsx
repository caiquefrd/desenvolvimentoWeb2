import Block from "../Block";
import Input from "../Input";
import Tittle from "../Tittle";
import Line from "../Line";

export default function RGBColor() {
  return (
    <Block>
      <Tittle>RGB - Red, Green, Blue </Tittle>
      <Line>
        <Input label="R" />
        <Input label="G" />
        <Input label="B" />
      </Line>
    </Block>
  );
}
