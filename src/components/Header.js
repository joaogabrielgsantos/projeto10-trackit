import styled from 'styled-components';
import logotipo from "../assets/images/logotipo.svg"
import perfil from "../assets/images/perfil.png"

function Header() {
    return (
        <>
            <Topo>
                <img className='logotipo' src={logotipo} alt="Logotipo TrackIt" />
                <img className="perfil" src={perfil} alt="perfil" />
            </Topo>
        </>

    )
}


const Topo = styled.div`
	width: 375px;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 0 18px;
    .logotipo {
        width: 97px;
        height: 49px;
    }
    .perfil {
        border-radius: 98.5px;
    }
`;




export default Header;