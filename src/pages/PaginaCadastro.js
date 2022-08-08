import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/images/logo.png"
import { useState } from "react";
import Inputs from "../components/Inputs";
import { postCadastro } from "../services/trackit";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";


function PaginaCadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Cadastrar")


    const navigate = useNavigate();



    function Cadastrar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton(<ThreeDots color="#FFFFFF" height={80} width={80} />)

        const body = {
            email, name, image, password
        }

        postCadastro(body).then(response => {
            const { data } = response
            console.log(data)
            navigate("/");
        })


    }


    return (
        <Container>
            <img src={logo} alt="Logotipo Principal" />
            <form onSubmit={Cadastrar}>
                <Inputs>
                    <input disabled={disable} type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input disabled={disable} type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <input disabled={disable} type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
                    <input disabled={disable} type="text" placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
                    <button disabled={disable} type="submit">{textButton}</button>
                </Inputs>
            </form>

            <Link to="/">
                <LinkWrap>
                    Já tem uma conta? Faça login!
                </LinkWrap>
            </Link>

        </Container>
    )
}

export default PaginaCadastro;



export const LinkWrap = styled.div`
	text-decoration-line: underline;
    color: #52B6FF;
`;
