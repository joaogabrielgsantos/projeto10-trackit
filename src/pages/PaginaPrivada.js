import { Navigate } from "react-router-dom"
import { useContext } from 'react';
import { MyContext } from "../context/MyContext";


function PaginaPrivada({ children }) {
  const { image, token } = useContext(MyContext)
  const auth = JSON.parse(localStorage.getItem('trackit'));

  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      {children}

    </>
  );
}

export default PaginaPrivada;