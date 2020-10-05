import Home from "./containers/Home";
import About from "./containers/About";

export const routes = [
  { path: "/", component: Home, exact: true, label: "Home" },
  { path: "/about", component: About, exact: true, label: "About" },
];
