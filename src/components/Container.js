import styled from 'styled-components';
function Container({children}){
    return (
        <Conteudo>
            {children}
        </Conteudo>
    )
}


const Conteudo = styled.div`
	width: 100%;
    height: 100vh;
    padding-top: 70px;
	background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;




export default Container;