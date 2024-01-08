import { randomNumber } from "@utils/index";
import { JSXElement, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { TeamsContextInterface } from "types/TeamsContextInterface";

interface TeamsContextProps {
  children: JSXElement;
  value?: TeamsContextInterface;
}

interface TeamsActions {
  draw: () => void;
  reset: () => void;
}

const defaultValue: TeamsContextInterface = {
  players: [
    { name: "user1" },
    { name: "user2" },
    { name: "user3" },
    { name: "user4" },
  ],
  availablePlayers: [
    { name: "user1" },
    { name: "user2" },
    { name: "user3" },
    { name: "user4" },
  ],
  drawedTeams: [
    { name: "team1", players: [] },
    { name: "team2", players: [] },
  ],
  turn: 0,
};

const numberOfTeams = 2;

export const TeamsContext =
  createContext<[TeamsContextInterface, TeamsActions]>();

export function TeamsContextProvider(props: TeamsContextProps) {
  const [teams, setTeams] = createStore(props.value ?? defaultValue);

  const teamsActions = {
    draw: () => {
      const { drawedTeams, availablePlayers, turn } = teams;

      const randomPlayerNumber = randomNumber(availablePlayers.length);
      const drawedPlayer = availablePlayers[randomPlayerNumber];

      const filteredAvailablePlayers = availablePlayers.filter(
        (player) => player.name !== drawedPlayer.name
      );

      const teamToDraw = turn % numberOfTeams;
      const newDrawedTeams = drawedTeams.map((team, index) => {
        if (index === teamToDraw) {
          return {
            ...team,
            players: [...team.players, drawedPlayer],
          };
        }
        return team;
      });

      setTeams({
        availablePlayers: filteredAvailablePlayers,
        drawedTeams: newDrawedTeams,
        turn: turn + 1,
      });
    },

    reset: () => {
      setTeams("drawedTeams", (teams) =>
        teams.map((drawedTeam) => ({ ...drawedTeam, players: [] }))
      );
      setTeams("availablePlayers", [...teams.players]);
    },
  };

  return (
    <TeamsContext.Provider value={[teams, teamsActions]}>
      {props.children}
    </TeamsContext.Provider>
  );
}

export const useTeamsContext = () => useContext(TeamsContext);
