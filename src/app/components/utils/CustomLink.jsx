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
            <Link class="active" to={props.path}>{props.label}</Link>
            :
            <Link class="" to={props.path}>{props.label}</Link>
      }
    />

  );
}

export default CustomLink;