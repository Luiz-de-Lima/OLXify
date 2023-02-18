import React from "react";
import { connect } from "react-redux";

const App = (props: any) => {
  return <div>Page</div>;
};
const mapStateToProps = (state: string) => {
  return { user: state };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
