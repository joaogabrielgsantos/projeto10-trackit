import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/images/logo.png"
import Inputs from "../components/Inputs";
import { LinkWrap } from "./PaginaCadastro";
import { useState, useContext} from "react";
import { ThreeDots } from 'react-loader-spinner';
import { postLogin } from "../services/trackit";
import MyContext from "../context/MyContext";


function PaginaLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Entrar")
    const { setImage, setToken } = useContext(MyContext)

    const navigate = useNavigate();



    function Logar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton(<ThreeDots color="#FFFFFF" height={80} width={80} />)

        const body = {
            email, password
        }


        postLogin(body).then(response => {
            const { data } = response
            setImage(data.image)
            setToken(data.token)
            const tokenSerializado = JSON.stringify({ token: data.token })
            localStorage.setItem('trackit', tokenSerializado)
            navigate("/hoje");

        })
        postLogin(body).catch(response => {
            const { data } = response
            console.log(data);
            alert("Usuário não cadastrado")
            navigate("/cadastro");
        })
    }





    return (
        <Container>
            <img src={logo} alt="Logotipo Principal" />
            <form onSubmit={Logar}>
                <Inputs>
                    <input disabled={disable} type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input disabled={disable} type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">{textButton}</button>
                </Inputs>
            </form>
            <Link to="/cadastro">
                <LinkWrap>
                    Não tem uma conta? Cadastre-se!
                </LinkWrap>
            </Link>
        </Container>
    )
}
export default PaginaLogin;