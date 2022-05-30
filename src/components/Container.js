import styled from 'styled-components';
function Container(props){
    return (
        <Conteudo>
            {props.children}
        </Conteudo>
    )
}


const Conteudo = styled.div`
	width: 375px;
    height: 100vh;
    padding-top: 70px;
	background: #F2F2F2;
    display: flex;
    flex-direction: column;
    
    align-items: center;
`;




export default Container;