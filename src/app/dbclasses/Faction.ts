import {Prisoner} from "./Prisoner";

export class Faction{
  name: string;
  prisonerByMainPerson: Prisoner;
  rating: number;
  prisonersByName : Prisoner[] = [];
}
