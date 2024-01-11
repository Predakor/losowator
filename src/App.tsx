import PlayerRow from "@components/PlayerRow/PlayerRow";
import SelectedTeams from "@components/SelectedTeams/SelectedTeams";
import Wheel from "@components/Wheel";
import WheelButtons from "@components/WheelButtons/WheelButtons";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <div class="flex flex-wrap justify-between gap-4">
        <PlayerRow />
      </div>
      <div class="flex flex-col items-center gap-4">
        <Wheel />
        <WheelButtons />
      </div>

      <div class="flex h-40 flex-col gap-4 md:flex-row">
        <SelectedTeams />
      </div>
    </Layout>
  );
}

export default App;
