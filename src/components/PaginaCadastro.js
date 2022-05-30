import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../assets/images/logo.png"
import { useState } from "react";
import Inputs from "./Inputs";
import axios from 'axios';


function PaginaCadastro() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [usuario, setUsuario] = useState('')


    function Cadastrar(e) {
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {email: email, name: nome, image: foto, password: senha});

        promise.then(response => {
           setUsuario (response.data);           
        })
    

    }
    console.log(usuario)



    return (
        <Container>
            <img src={logo} alt="Logotipo Principal" />
            <form onSubmit={Cadastrar}>
                <Inputs>
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    <input type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="text" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} />
                    <button type="submit">Cadastrar</button>
                </Inputs>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </Container>
    )
}

export default PaginaCadastro;