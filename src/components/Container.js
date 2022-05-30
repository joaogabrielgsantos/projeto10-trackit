import styled from 'styled-components';
function Container(props){
    console.log(props)
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
`;




export default Container;