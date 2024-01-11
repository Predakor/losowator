import { Player } from "./player";

export interface DrawedTeam {
  name: string | null;
  players: Player[];
}

export interface TeamsContextInterface {
  turn: number;
  players: Player[];
  availablePlayers: Player[];
  drawedTeams: DrawedTeam[];
  numberOfTeams: number;
}
