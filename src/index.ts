#!/usr/bin/env node

const argv = process.argv.slice(2);

// Find date argument (first non-flag)
const dateStr = argv.find(a => !a.startsWith("--")) || "1990-01-01";

// Check flags
const formatFlag = argv.find(a => a.startsWith("--format="));
const format = formatFlag === "--format=text" ? "text" : "json";

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

