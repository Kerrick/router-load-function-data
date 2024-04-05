export type ISO8601DateString = string;
export type ResourceURL<name> = string;

export type PersonModel = {
  name: string;
  birth_year: string;
  eye_color: string | "unknown" | "n/a";
  gender: "Male" | "Female" | "unknown" | "n/a";
  hair_color: string | "unknown" | "n/a";
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<ResourceURL<"films">>;
  species: Array<ResourceURL<"species">>;
  starships: Array<ResourceURL<"starships">>;
  vehicles: Array<ResourceURL<"vehicles">>;
  url: ResourceURL<"people">;
  created: ISO8601DateString;
  edited: ISO8601DateString;
};

export type PlanetModel = {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: Array<ResourceURL<"people">>;
  films: Array<ResourceURL<"films">>;
  url: ResourceURL<"planets">;
  created: ISO8601DateString;
  edited: ISO8601DateString;
};
