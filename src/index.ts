#!/usr/bin/env node

const args = process.argv.slice(2);
const dateStr = args[0] || "1990-01-01";

const result = {
  date: dateStr,
  bazi: {
    yearPillar: "TODO",
    monthPillar: "TODO",
    dayPillar: "TODO",
    hourPillar: "TODO"
  }
};

console.log(JSON.stringify(result, null, 2));
