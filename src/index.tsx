/* @refresh reload */
import "./index.css";

import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import NotFound from "./errors/404";
import { lazy } from "solid-js";
import loadPlanets from "./pages/Planets.load";

const Planets = lazy(() => import("./pages/Planets"));
const Home = lazy(() => import("./pages/Home"));

const root = document.getElementById("root");

if (!(root instanceof HTMLElement)) {
  if (import.meta.env.DEV) {
    throw new Error(
      "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
    );
  } else {
    throw new Error("Appliciatn could not start.");
  }
}

render(
  () => (
    <Router>
      <Route path="/planets" component={Planets} load={loadPlanets} />
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  root,
);
