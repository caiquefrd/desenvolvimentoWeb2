import Block from "../block";
import Input from "../input";
import Tittle from "../title";
import Line from "../Line";

export default function RGBColor() {
  return (
    <Block>
      <Tittle>RGB - Red, Green, Blue <div id="Blue"></div></Tittle>
      <Line>
        <Input label="R" />
        <Input label="G" />
        <Input label="B" />
      </Line>
    </Block>
  );
}
