import { Link } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/images/logo.png"
import Inputs from "../components/Inputs";


function PaginaLogin(){
    
    
    return(
        <Container>
            <img src={logo} alt="Logotipo Principal" />
            <form>
                <Inputs>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="senha"/>
                    <button type="submit">Entrar</button>
                </Inputs>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}
export default PaginaLogin;