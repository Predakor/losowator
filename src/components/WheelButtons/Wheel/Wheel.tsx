import { randomNumber } from "@utils/index";
import { useTeamsContext } from "context/TeamsContext/TeamsContext";
import { FaSolidPlay } from "solid-icons/fa";
import { createEffect, createSignal } from "solid-js";
import { Player } from "types/player";
import { drawCircle } from "./WheelDrawer";

interface Props {}

const spinDuration = 2000;
const spinStreength = 9;

function Wheel({}: Props) {
  const [teams, { draw }] = useTeamsContext();
  const [players, setPlayers] = createSignal<Player[]>();
  const [wheelRotation, setWheelRotation] = createSignal(0);

  let canvasRef: HTMLCanvasElement;

  const clickHandler = () => {
    const degreesPerPlayer = 360 / players().length;
    const randomPlayer = randomNumber(players().length);

    const randomPlayerDegree = degreesPerPlayer * randomPlayer;

    const randomRotation = 360 * spinStreength + randomPlayerDegree;

    setWheelRotation((prevRotation) => prevRotation + randomRotation);
    setTimeout(() => draw(), spinDuration + 500);
  };

  createEffect(() => {
    const newPlayers = teams.availablePlayers.map((availablePlayer) => ({
      ...availablePlayer,
    }));
    setPlayers(newPlayers);
    drawCircle(canvasRef, players());
  });

  return (
    <div
      class="relative aspect-square transition-transform ease-out"
      style={{
        transform: `rotate(${wheelRotation()}deg`,
        "transition-duration": spinDuration + "ms",
      }}
      onClick={clickHandler}
    >
      <canvas
        width={500}
        height={500}
        class="aspect-square w-full "
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
export default Wheel;
