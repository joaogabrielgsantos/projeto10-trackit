import { useOutletContext, Link } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";


function PaginaHoje(){
    const { image } = useOutletContext()
    return (
        <>
         <Header image={image} />
         <Container>
         <Link to="/habitos">
         <button>Vá para página Hábitos</button>
         </Link>
         </Container>
         
        
        </>
       
        
    )
}

export default PaginaHoje;