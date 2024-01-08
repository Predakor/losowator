import PlayerRow from "@components/PlayerRow/PlayerRow";
import SelectedTeams from "@components/SelectedTeams/SelectedTeams";
import Wheel from "@components/Wheel";
import WheelButtons from "@components/WheelButtons/WheelButtons";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <div class="grid h-full place-items-center justify-center">
        <PlayerRow />

        <div class="flex flex-col gap-2 items-center">
          <Wheel />
          <WheelButtons />
        </div>

        <SelectedTeams />
      </div>
    </Layout>
  );
}

export default App;
