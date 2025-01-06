export const getDate = (today) => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  const dayList = ["일", "월", "화", "수", "목", "금", "토"];

  return `${year}. ${month}. ${date}. ${dayList[day]}`;
};
