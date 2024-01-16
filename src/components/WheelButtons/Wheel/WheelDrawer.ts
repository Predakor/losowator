import { toRadians } from "@utils/index";
import { Player } from "types/player";

const randomColors = [
  "#FF00FF", // Electric Purple
  "#00FFFF", // Cyan
  "#FFD700", // Gold
  "#FF4500", // Neon Red-Orange
  "#00FF00", // Neon Green
  "#FFA500", // Neon Orange
  "#FFFF00", // Yellow
  "#FF1493", // Deep Pink
  "#00FF7F", // Spring Green
  "#4B0082", // Indigo
];

export function drawCircle(canvasRef: HTMLCanvasElement, players: Player[]) {
  const ctx = canvasRef.getContext("2d");
  ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

  const centerX = canvasRef.width / 2;
  const centerY = canvasRef.height / 2;

  const radius = canvasRef.width / 2 - 4;

  const degreesPerPlayer = 360 / players.length;

  const colors = randomColors.slice(0, Math.ceil(randomColors.length / 2));

  const drawSector = (startAngle: number, endAngle: number, color: string) => {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  const drawSectorBorder = (
    startAngle: number,
    endAngle: number,
    borderMargin = 2,
    borderColor = "black",
  ) => {
    ctx.moveTo(centerX, centerY);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + borderMargin, startAngle, endAngle);

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderMargin;
    ctx.stroke();
    ctx.closePath();
  };

  const drawPlayerName = (
    startAngle: number,
    endAngle: number,
    textOffset = 50,
    name: string,
  ) => {
    const textRadius = radius / 2 + textOffset;
    const textAngles = (startAngle + endAngle) / 2;

    const textX = centerX + textRadius * Math.cos(textAngles);
    const textY = centerY + textRadius * Math.sin(textAngles);

    ctx.fillStyle = "black";
    ctx.font = "24px ui-sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(name, textX, textY);
  };

  players.forEach((player, i) => {
    const startAngle = toRadians(degreesPerPlayer * i);
    const endAngle = toRadians(degreesPerPlayer * (i + 1));

    console.log(
      i,
      players.length,
      players.length % 2 ? 3 : 2,
      i % (players.length % 2 ? 3 : 2),
    );

    const currentColor = colors[i % colors.length];

    drawSector(startAngle, endAngle, currentColor);
    drawSectorBorder(startAngle, endAngle);
    drawPlayerName(startAngle, endAngle, 70, player.name);
  });

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  ctx.moveTo(centerX, centerY);
  ctx.beginPath();
  ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);

  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}
