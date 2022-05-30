import styled from "styled-components";


function Inputs (props){
    return (
        <InputsWrapper>
            {props.children}
        </InputsWrapper>

    )
}

const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input {
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 6px;
}
button {
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 25px;

}

`;


export default Inputs;