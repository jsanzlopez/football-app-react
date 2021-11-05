import { PlayerStats } from "./player.model";

export interface TeamListItem {
  id: string;
  name: string;
  image: string;
}

export interface PlayerFromTeam {
  id: string;
  image: string;
  initialMarketValue: number;
  lastStats: PlayerStats[];
  marketValue: number;
  name: string;
  nickname: string;
  playerStats: PlayerStats[];
  playerStatus: string;
  points: number;
  position: number;
}

export interface Team {
  id: string;
  name: string;
  image: string;
  players: PlayerFromTeam[]
}