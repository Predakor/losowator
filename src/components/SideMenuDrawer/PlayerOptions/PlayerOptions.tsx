import { debounce } from "@utils/index";
import { useTeamsContext } from "context/TeamsContext/TeamsContext";
import { For } from "solid-js";
import AddPlayer from "./AddPlayer";

function PlayerOptions() {
  const [teams, { addPlayer, editPlayer, removePlayer }] = useTeamsContext();

  const inputHandler = debounce((id: string, value: string) => {
    editPlayer(id, { name: value });
  }, 500);

  return (
    <>
      <For each={teams.players}>
        {(player) => (
          <div>
            <input
              class="input w-full max-w-xs"
              type="text"
              value={player.name}
              onInput={(e) => inputHandler(player.id, e.currentTarget.value)}
            />
            <button
              class="btn-ghost btn"
              onClick={() => removePlayer(player.id)}
            >
              X
            </button>
          </div>
        )}
      </For>
      <div class="join flex w-full ">
        <AddPlayer addHandler={addPlayer} />
      </div>
    </>
  );
}

export default PlayerOptions;
