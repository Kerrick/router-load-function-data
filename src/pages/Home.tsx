import type { Component, JSX } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";
import { A } from "@solidjs/router";

const Home: Component<RouteSectionProps<undefined>> = (props): JSX.Element => {
  return (
    <>
      <h1>Home</h1>
      <A href="/planets">Go to Planets</A>
    </>
  );
};

export default Home;
