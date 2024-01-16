import PlayerRow from "@components/PlayerRow/PlayerRow";
import SelectedTeams from "@components/SelectedTeams/SelectedTeams";
import Wheel from "@components/WheelButtons/Wheel/Wheel";
import WheelButtons from "@components/WheelButtons/WheelButtons";
import Layout from "./layout/Layout";
import { FaSolidPlay } from "solid-icons/fa";

function App() {
  return (
    <Layout>
      <div class="hidden flex-wrap justify-between gap-4 lg:flex">
        <PlayerRow />
      </div>
      <div class="flex flex-col items-center gap-4">
        <FaSolidPlay size={32} class="rotate-90" />
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
