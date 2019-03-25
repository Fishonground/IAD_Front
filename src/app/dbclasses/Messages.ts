import {User} from "./User";
import {Prisoner} from "./Prisoner";
import {Video} from "./Video";

export class Messages{
  id: number;
  usersByUser: User;
  prisonerByPrisoner: Prisoner;
  videosByVideo: Video;
  massege: string;
}
