import styled from "styled-components";
   

export default function Input({label}:any){
    return <WrapperSld>
        <LabelSld>{label}</LabelSld>
        <InputSld/>
    </WrapperSld>
}

const WrapperSld = styled.div`
    display: flex;
    flex-direction: column;
`

const LabelSld = styled.label`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 19px;
`

const InputSld = styled.input`
    width: 120px;

`