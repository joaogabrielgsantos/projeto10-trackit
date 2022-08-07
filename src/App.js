import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaLogin from "./pages/PaginaLogin";



function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaLogin />} />
                        <Route path="/cadastro" element={<PaginaCadastro />} />
                    </Routes>
            </BrowserRouter>
        </>

    )
}

export default App;