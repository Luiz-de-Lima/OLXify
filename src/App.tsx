import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Pages } from "./Routes";

const App = (props: any) => {
  return (
    <BrowserRouter>
      <Pages />
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
