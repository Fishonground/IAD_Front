import {Room} from "./Room";
import {User} from "./User";
import {Faction} from "./Faction";

export class Prisoner{
  personId: number;
  term: Date = new Date();
  roomsByRoom: Room;
  ownerByUser: User;
  usersByOwner : User;
  rating: number;
  factionByFaction: Faction;
}
