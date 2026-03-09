#!/usr/bin/env node

const args = process.argv.slice(2);
const dateStr = args.find(a => !a.startsWith("--")) || "1990-01-01";
const format = args.includes("--format=text") ? "text" : "json";

const result = {
  date: dateStr,
  bazi: {
    yearPillar: "TODO",
    monthPillar: "TODO",
    dayPillar: "TODO",
    hourPillar: "TODO"
  }
};

if (format === "text") {
  console.log(
    `Bazi for ${result.date}: ` +
      `Year=${result.bazi.yearPillar}, ` +
      `Month=${result.bazi.monthPillar}, ` +
      `Day=${result.bazi.dayPillar}, ` +
      `Hour=${result.bazi.hourPillar}`
  );
} else {
  console.log(JSON.stringify(result, null, 2));
}
