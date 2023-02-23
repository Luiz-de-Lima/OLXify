import React from "react";
import { Link } from "react-router-dom";
import { Title, BackLink, Container } from "./style";
export const NotFound = () => {
  return (
    <Container>
      <img
        className="notfound"
        src="https://img.freepik.com/vetores-premium/pagina-de-erro-404-nao-encontrada-ilustracao-de-conceito-natural-para-pagina-de-destino-ausente-na-web_607751-150.jpg?w=2000"
        alt="não encontrada"
      />
      <BackLink>
        <Link to="/">Voltar</Link>
      </BackLink>
    </Container>
  );
};
