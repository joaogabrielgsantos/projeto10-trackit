import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../assets/images/logo.png"
import { useState } from "react";
import Inputs from "./Inputs";


function PaginaCadastro(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')



    return(
        <Container>
            <img src={logo} alt="Logotipo Principal" />
            <form>
                <Inputs>
                    <input type="email" placeholder="email" value={email}/>
                    <input type="password" placeholder="senha" value={senha}/>
                    <input type="text" placeholder="nome" value={nome}/>
                    <input type="text" placeholder="foto" value={foto}/>
                    <button type="submit">Cadastrar</button>
                </Inputs>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </Container>
    )
}

export default PaginaCadastro;