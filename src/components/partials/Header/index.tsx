import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderArea } from "./styled";
import { dologout, isLogged } from "../../../helpers/AuthHandler";
export const Header = () => {
  const navigate = useNavigate();
  let logged = isLogged();

  const handleLogout = () => {
    dologout();
    navigate("/");
  };
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
            <span className="logo-4">ify</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/my-account">Minha conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link to="/post-an-ad" className="button">
                    Postar um anúncio
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};
