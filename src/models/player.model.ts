import { Moment } from "moment";

export interface PlayerListItem {
  id: string;
  name: string;
  team: string;
  position: string;
  points: number;
  value: number;
  image: string;
  status: string;
}

export interface Player {
  averagePoints: number;
  birthDate: Moment;
  birthplace: string;
  height: number;
  id: string;
  image: string;
  lastSeasonPoints: number
  marketValue: number
  name: string;
  nickname: string;
  playerStats: PlayerStats[];
  playerStatus: string;
  points: number
  // PositionId
  position: number
  team: PlayerTeam;
}

export interface PlayerTeam {
  badge: string;
  dspId: number;
  id: string;
  name: string;
  shortName: string;
}

export interface PlayerStats {
  totalPoints: number;
  weekNumber: number;
}