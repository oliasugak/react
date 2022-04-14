export const getTimeString = (date) => {
  return `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
};

const formatTime = (number) => {
  return String(number).length > 1
    ? `${number}`
    : `0${number}`;
};
