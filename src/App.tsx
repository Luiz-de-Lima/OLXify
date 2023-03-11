import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Pages } from "./Routes";
import { Template } from "./components/MainComponents";
import { Header } from "./components/partials/Header";
import { Footer } from "./components/partials/Footer";
import "./App.css";
const App = (props: any) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Pages />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};
const mapStateToProps = (state: string) => {
  return { user: state };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
