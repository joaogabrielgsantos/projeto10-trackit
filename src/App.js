import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaHabitos from "./pages/PaginaHabitos";
import PaginaHoje from "./pages/PaginaHoje";
import PaginaLogin from "./pages/PaginaLogin";
import MyContext from "./context/MyContext";
import { useState } from "react";
import ProtectedRoutes from "./pages/ProtectedRoutes";





function App() { 
   
    const [image, setImage] = useState("");
    const [token, setToken] = useState("");
    console.log(image);

    return (
        <>
            <GlobalStyle />

            <BrowserRouter>
                <MyContext.Provider value={{ image, setImage, token, setToken }}>
                    <Routes>
                        <Route path="/" element={<PaginaLogin />} />
                        <Route path="/cadastro" element={<PaginaCadastro />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/habitos" element={<PaginaHabitos />} />
                            <Route path="/hoje" element={<PaginaHoje />} />
                        </Route>
                    </Routes>
                </MyContext.Provider>

            </BrowserRouter>

        </>

    )
}

export default App;