import React from 'react';
import { Route, Link } from "react-router-dom";

const CustomLink = (props) => {
  return (
    <Route
      path={props.path}
      exact={props.exact}
      children={
        ({ match }) =>
          match ?
            <Link className="active" to={props.path}>{props.label}</Link>
            :
            <Link className="" to={props.path}>{props.label}</Link>
      }
    />

  );
}

export default CustomLink;