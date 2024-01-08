import { Player } from "./player";

export interface DrawedTeam {
  name: string | null;
  players: Player[];
}

export interface TeamsContextInterface {
  turn: number;
  players: { name: string }[];
  availablePlayers: Player[];
  drawedTeams: DrawedTeam[];
}
