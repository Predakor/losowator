import { useTeamsContext } from "context/TeamsContext/TeamsContext";

function TeamSlider() {
  const [teams, { changeNumberOfTeams }] = useTeamsContext();

  const maxTeams = 8;
  const minTeams = 2;

  const inputHandler = (e: { currentTarget: HTMLInputElement }) => {
    const value = e.currentTarget.valueAsNumber;
    if (value !== teams.numberOfTeams) {
      changeNumberOfTeams(value);
    }
  };

  return (
    <div class="flex">
      <input
        class="range range-xs flex-1"
        type="range"
        name="team-range"
        id="team-range-slider"
        value={teams.numberOfTeams}
        min={minTeams}
        max={maxTeams}
        step={1}
        onInput={inputHandler}
      />

      <input
        class="w-8 flex-none"
        type="number"
        name="number-of-teams"
        id="teams-slider-count"
        value={teams.numberOfTeams}
        min={minTeams}
        max={maxTeams}
        step={1}
        onInput={inputHandler}
      />
    </div>
  );
}

export default TeamSlider;
