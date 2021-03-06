import { DIFFICULTIES, MIN_TIME_COUNTER } from "./configs";

const getReadableScore = (milliseconds, showMS = true) => {
  let seconds = "" + Math.floor(milliseconds / 1000);
  let minutes = "" + Math.floor(seconds / 60);

  seconds = "" + Math.floor(seconds % 60);

  milliseconds = "" + Math.floor(milliseconds % 1000);

  minutes = minutes.padStart(2, "0");
  seconds = seconds.padStart(2, "0");
  milliseconds = showMS ? "." + milliseconds.padStart(4, "0") : "";

  return minutes + " : " + seconds + milliseconds;
};

const getRandomItem = (array) => {
  if (array.length <= 0) return "";
  return array[Math.floor(Math.random() * array.length)];
};

const getTimeForWord = (length, factor) => {
  return Math.max(Math.ceil(length / factor), MIN_TIME_COUNTER);
};

const getDifficultyBasedOnLevelFactor = (currentDifficulty, levelFactor) => {
  const totalFactor = currentDifficulty.factor + levelFactor;

  if (totalFactor >= DIFFICULTIES.hard.factor) return DIFFICULTIES.hard;

  if (totalFactor >= DIFFICULTIES.medium.factor) return DIFFICULTIES.medium;

  return DIFFICULTIES.easy;
};

export {
  getReadableScore,
  getRandomItem,
  getTimeForWord,
  getDifficultyBasedOnLevelFactor,
};
