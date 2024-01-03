import { For, Show, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import PlayerRow from "./components/PlayerRow/PlayerRow";
import Wheel from "./components/Wheel";
import Layout from "./layout/Layout";
import { randomNumber } from "./utils";

function App() {
  const [turn, setTurn] = createSignal(0);

  const [players, setPlayers] = createStore([
    { name: "upos", team: "" },
    { name: "kuba", team: "" },
    { name: "stary", team: "" },
    { name: "user4", team: "" },
    { name: "user5", team: "" },
    { name: "user6", team: "" },
  ]);

  const drawRandomPlayer = () => {
    const avaiblePlayers = players.filter((player) => !player.team);
    const allPlayersDrawed = avaiblePlayers.length === 0;

    if (allPlayersDrawed) return false;

    const drawedPlayer = avaiblePlayers[randomNumber(avaiblePlayers.length)];
    const playerPostion = players.findIndex(
      (player) => player === drawedPlayer
    );

    const teamToDraw = turn() % 2 ? "2" : "1";
    setPlayers(playerPostion, "team", teamToDraw);
    setTurn((turn) => turn + 1);
  };

  const drawAll = () => {
    while (drawRandomPlayer() !== false) {}
    return;
  };

  const resetPlayers = () => {
    setPlayers((player) => !!player.team, "team", "");
  };

  return (
    <>
      <Layout>
        <div class="flex flex-col items-center gap-2 justify-between ">
          <PlayerRow players={players} />
          <Wheel />
          <div class="flex gap-2">
            <button class="btn btn-primary" onclick={drawRandomPlayer}>
              draw
            </button>
            <button class="btn btn-primary" onClick={drawAll}>
              draw all
            </button>
            <Show when={players.filter((player) => !player.team).length === 0}>
              <button class="btn btn-primary" onClick={resetPlayers}>
                reset
              </button>
            </Show>
          </div>
          <div>
            <div>
              <h2>Team 1</h2>
              <For each={players}>
                {(player) => (
                  <Show when={player.team === "1"}>
                    <p>{player.name}</p>
                  </Show>
                )}
              </For>
            </div>
            <span class="divider">VS</span>
            <div>
              <h2>Team 2</h2>
              <For each={players}>
                {(player) => (
                  <Show when={player.team === "2"}>
                    <p>{player.name}</p>
                  </Show>
                )}
              </For>
            </div>
          </div>
          {/* <SelectedTeams players={players()} /> */}
        </div>
      </Layout>
    </>
  );
}

export default App;
