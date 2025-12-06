import React from "react";

export default function FloatingHearts() {
  const hearts = [
    { top: "8%", left: "15%" },
    { top: "15%", left: "47%" },
    { top: "26%", left: "28%" },
    { top: "29%", left: "43%" },
    { top: "45%", left: "14%" },
    { top: "50%", left: "8%" },
    { top: "57%", left: "26%" },
    { top: "47%", left: "20%" },
    { top: "70%", left: "20%" },
    { top: "84%", left: "23%" },
    { top: "83%", left: "8%" },
    { top: "72%", left: "13%" },
    { top: "90%", left: "12%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((pos, i) => (
        <div
          key={i}
          className="absolute text-rose-400 text-4xl opacity-40 animate-float"
          style={pos}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
