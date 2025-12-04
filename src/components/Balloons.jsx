import React from "react";

export default function Balloons() {
  const balloons = [
    { top: "10%", right: "20%" },
    { top: "30%", right: "5%" },
    { top: "20%", right: "5%" },
    { top: "10%", right: "29%" },
    { top: "20%", right: "16%" },
    { top: "80%", right: "20%" },
    { top: "74%", right: "5%" },
    { top: "64%", right: "5%" },
    { top: "80%", right: "29%" },
    { top: "74%", right: "15%" },
    { top: "64%", right: "18%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {balloons.map((pos, i) => (
        <div
          key={i}
          className="absolute text-5xl opacity-30 animate-floatSlow"
          style={pos}
        >
          🎈
        </div>
      ))}
    </div>
  );
}
