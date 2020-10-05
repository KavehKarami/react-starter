import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Layout>
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Layout>
    </Router>
  );
}

export default App;
