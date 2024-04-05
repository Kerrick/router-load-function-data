import type { RouteLoadFunc, RouteLoadFuncArgs } from "@solidjs/router";
import { cache } from "@solidjs/router";
import type { PlanetModel } from "../swapi";

export type PlanetsData = Array<PlanetModel>;

const loadPlanets: RouteLoadFunc<Promise<PlanetsData>> = ({
  params,
  location,
  intent,
}: RouteLoadFuncArgs) => {
  return cache<() => Promise<PlanetsData>>(
    () =>
      fetch("https://swapi.dev/api/planets/")
        .then((r) => r.json())
        .then((json) => json.results),
    "planets",
  )();
};

export default loadPlanets;
