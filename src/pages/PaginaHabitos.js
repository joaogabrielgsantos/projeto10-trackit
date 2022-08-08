import { useOutletContext, Link } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";





function PaginaHabitos() {
    const { image } = useOutletContext()


    return (
        <>
            <Header image={image} />
            <Container>
                <Link to="/hoje">
                    <button>Vá para página Hoje</button>
                </Link>
            </Container>

        </>
    )
}


export default PaginaHabitos;
