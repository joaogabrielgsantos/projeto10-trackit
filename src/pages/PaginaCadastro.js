import { Link } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/images/logo.png"
import { useState } from "react";
import Inputs from "../components/Inputs";
import { postCadastro } from "../services/trackit";


function PaginaCadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [user, setUser] = useState("")



    function Cadastrar(e) {
        e.preventDefault();
        const body = {
            email, name, image, password
        }

        postCadastro(body).then(response => {
            const { data } = response
            setUser(data)
        })

    }

    console.log(user)


    



    return (
        <Container>
            <img src={logo} alt="Logotipo Principal" />
            <form onSubmit={Cadastrar}>
                <Inputs>
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
                    <button type="submit">Cadastrar</button>
                </Inputs>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </Container>
    )
}

export default PaginaCadastro;