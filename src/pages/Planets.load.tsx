import type { RouteLoadFunc, RouteLoadFuncArgs } from "@solidjs/router";
import { createAsync } from "@solidjs/router";
import type { PlanetModel } from "../swapi";
import { Accessor } from "solid-js";

export type PlanetsData = Array<PlanetModel>;

const loadPlanets: RouteLoadFunc<Accessor<PlanetsData | undefined>> = ({
  params,
  location,
  intent,
}: RouteLoadFuncArgs) => {
  return createAsync(() =>
    fetch("https://swapi.dev/api/planets/")
      .then((r) => r.json())
      .then((json) => json.results),
  );
};

export default loadPlanets;
