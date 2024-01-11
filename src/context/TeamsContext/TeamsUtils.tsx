import { createUniqueId } from "solid-js";
import { DrawedTeam } from "types/TeamsContextInterface";
import { Player } from "types/player";

export function createPlayer(name: string): Player {
  return {
    id: createUniqueId(),
    name: name || "",
  };
}

export function createEmptyTeams(
  name: string | null,
  amount?: number,
): DrawedTeam[] {
  return Array(amount ?? 1).fill({
    name: name ?? "",
    players: [],
  });
}
