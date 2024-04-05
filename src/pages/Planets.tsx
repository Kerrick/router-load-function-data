import { Accessor, Component, JSX, Suspense } from "solid-js";
import { For } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";
import { A } from "@solidjs/router";
import type { PlanetsData } from "./Planets.load";
import type { PlanetModel } from "../swapi";

const Planets: Component<
  RouteSectionProps<Accessor<PlanetsData | undefined>>
> = (props): JSX.Element => {
  return (
    <>
      <h1>Planets</h1>
      <A href="/" end={true}>
        Go to Home
      </A>
      <Suspense fallback={<p>Loading planets...</p>}>
        <For each={props.data()}>
          {(item: PlanetModel, index) => (
            <>
              <h2>{item.name}</h2>
              <dl>
                <dt>Climate</dt>
                <dd>{item.climate}</dd>
                <dt>Gravity</dt>
                <dd>{item.gravity}</dd>
              </dl>
            </>
          )}
        </For>
      </Suspense>
    </>
  );
};

export default Planets;
