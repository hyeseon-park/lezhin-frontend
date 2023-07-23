export const getDayKor = (period: string) => {
  switch (period) {
    case "MON":
      return "월요일";
    case "TUE":
      return "화요일";
    case "WED":
      return "수요일";
    case "THU":
      return "목요일";
    case "FRI":
      return "금요일";
    case "SAT":
      return "토요일";
    case "SUN":
      return "일요일";
    default:
      break;
  }
};
