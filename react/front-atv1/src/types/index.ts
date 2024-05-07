export interface ColorProps {
    rgb : Props;
    hsla : Props;
    cmyk : Props;
}

export interface Props {
    input1 : number;
    input2 : number;
    input3 : number;
    input4? : number;
}