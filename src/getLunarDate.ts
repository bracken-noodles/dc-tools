import solarLunar from "solarlunar";

export const showCal = (timestamp: number) => {
  const d = new Date(timestamp);
  const o = solarLunar.solar2lunar(
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate()
  );
  const str = `${o.gzYear}(${o.animal})年${o.monthCn}${o.dayCn}`;
  return str;
};
