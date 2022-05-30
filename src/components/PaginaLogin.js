import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../assets/images/logo.png"
import { useState } from "react";
import Inputs from "./Inputs";


function PaginaLogin(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    return(
        <Container>
            <img src={logo} alt="Logotipo Principal" />
            <form>
                <Inputs>
                    <input type="email" placeholder="email" value={email}/>
                    <input type="password" placeholder="senha" value={senha}/>
                    <button type="submit">Entrar</button>
                </Inputs>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}



export default PaginaLogin;