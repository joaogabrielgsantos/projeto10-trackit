import styled from 'styled-components';
import logotipo from "../assets/images/logotipo.svg"
/* import perfil from "../assets/images/perfil.png" */
/* import { useContext } from 'react';
import { MyContext } from "../context/MyContext";
 */




function Header({image}) {



    return (
        <>
            <Topo>
                <img src={logotipo} alt="Logotipo TrackIt" />
                <img src={image} alt="perfil" />
            </Topo>
        </>

    )
}




const Topo = styled.div`
	width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 0 18px;
    img:first-child {
        width: 97px;
        height: 49px;
    }
    img:last-child {
        width: 51px;
        height: 51px;
        object-fit: cover;
        border-radius: 98.5px;
    }
`;




export default Header;