import { Moment } from "moment";
import { PlayerTeam } from "./player.model";

export interface Calendar {
  date: Moment;
  featured: boolean;
  id: string;
  local: PlayerTeam;
  localScore: number;
  matchDate: Moment;
  matchState: number;
  time: Moment;
  visitor: PlayerTeam;
  visitorScore: number;
}