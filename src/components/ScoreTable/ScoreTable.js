import React from "react";
import ScoreRow from "./ScoreRow";

export default function ScoreTable({ scores = [] }) {
  return (
    <div className="rounded-md w-full overflow-hidden border">
      <table className="w-full text-center table-fixed">
        <tbody>
          <tr className="bg-white text-black">
            <th colSpan="2" className="py-1">
              Score Board
            </th>
          </tr>
          {scores.map((score, index) => (
            <ScoreRow key={index + score} number={index + 1} score={score} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
