import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaHabitos from "./pages/PaginaHabitos";
import PaginaHoje from "./pages/PaginaHoje";
import PaginaLogin from "./pages/PaginaLogin";
import MyContext from "./context/MyContext";
import { useState } from "react";



function App() {
    const [user, setUser] = useState("");
    console.log(user);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <MyContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route path="/" element={<PaginaLogin />} />
                        <Route path="/cadastro" element={<PaginaCadastro />} />
                        <Route path="/habitos" element={<PaginaHabitos />} />
                        <Route path="/hoje" element={<PaginaHoje />} />
                    </Routes>
                </MyContext.Provider>

            </BrowserRouter>
        </>

    )
}

export default App;