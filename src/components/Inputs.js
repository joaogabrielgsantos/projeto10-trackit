import styled from "styled-components";


function Inputs ({children}){
    return (
        <InputsWrapper>
            {children}
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
    &::placeholder {
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
   }
}


button {
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: #52B6FF;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 25px;

}

`;


export default Inputs;