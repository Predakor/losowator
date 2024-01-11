import { randomNumber } from "@utils/index";
import {
  JSXElement,
  createContext,
  createUniqueId,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import { TeamsContextInterface } from "types/TeamsContextInterface";
import { Player } from "types/player";

interface TeamsContextProps {
  children: JSXElement;
  value?: TeamsContextInterface;
}

interface TeamsActions {
  draw: () => void;
  reset: () => void;
  addPlayer: (name: string) => void;
  removePlayer: (playerID: string) => void;
  editPlayer: (playerID: string, changes: Partial<Player>) => void;
  changeNumberOfTeams: (size: number) => void;
}

const defaultValue: TeamsContextInterface = {
  players: [
    { id: "0", name: "user1" },
    { id: "1", name: "user2" },
    { id: "2", name: "user3" },
    { id: "3", name: "user4" },
  ],
  availablePlayers: [],
  drawedTeams: [],
  turn: 0,
  numberOfTeams: 3,
};

export const TeamsContext =
  createContext<[TeamsContextInterface, TeamsActions]>();

export function TeamsContextProvider(props: TeamsContextProps) {
  const [teams, setTeams] = createStore(props.value ?? defaultValue);

  const init = () => {
    const initialDrawedTeams = new Array(teams.numberOfTeams).fill({
      name: "",
      players: [],
    });

    const initialAvailablePlayers = [...teams.players];

    setTeams({
      availablePlayers: initialAvailablePlayers,
      drawedTeams: initialDrawedTeams,
    });
  };
  init();

  const teamsActions: TeamsActions = {
    draw: () => {
      const { drawedTeams, availablePlayers, turn, numberOfTeams } = teams;

      const randomPlayerNumber = randomNumber(availablePlayers.length);
      const drawedPlayer = availablePlayers[randomPlayerNumber];

      const filteredAvailablePlayers = availablePlayers.filter(
        (player) => player.name !== drawedPlayer.name,
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
        teams.map((drawedTeam) => ({ ...drawedTeam, players: [] })),
      );
      setTeams("availablePlayers", [...teams.players]);
    },

    addPlayer: (name) => {
      const newPlayer = {
        id: createUniqueId(),
        name: name,
      };

      setTeams("players", (oldPlayers) => [...oldPlayers, newPlayer]);
      setTeams("availablePlayers", (avaiblePlayers) => [
        ...avaiblePlayers,
        newPlayer,
      ]);
    },

    removePlayer: (playerID) => {
      setTeams("players", (players) =>
        players.filter((player) => player.id !== playerID),
      );
    },

    editPlayer: (playerID, changes) => {
      setTeams("players", (players) =>
        players.map((player) =>
          player.id === playerID ? { ...player, ...changes } : player,
        ),
      );
      setTeams("availablePlayers", (availablePlayers) =>
        availablePlayers.map((player) =>
          player.id === playerID ? { ...player, ...changes } : player,
        ),
      );
    },

    changeNumberOfTeams: (size: number) => {
      const { drawedTeams } = teams;

      setTeams("numberOfTeams", size);

      if (drawedTeams.length === size) {
        return;
      }

      if (drawedTeams.length > size) {
        setTeams("drawedTeams", (drawedTeams) =>
          drawedTeams.toSpliced(0, size),
        );
        return;
      }

      const missingDrawedTeams = new Array(size - drawedTeams.length).fill({
        name: "",
        players: [],
      });
      const newDrawedTeams = [...drawedTeams, ...missingDrawedTeams];
      setTeams("drawedTeams", newDrawedTeams);
    },
  };

  return (
    <TeamsContext.Provider value={[teams, teamsActions]}>
      {props.children}
    </TeamsContext.Provider>
  );
}

export const useTeamsContext = () => useContext(TeamsContext);
