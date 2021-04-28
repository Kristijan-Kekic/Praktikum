function DayOfYear(year, month, day) {
	
 let md = 0;
 if (month = 2) md = 31;
 if (month = 3 && year % 4 == 0) md = 60;
 if (month = 3 && year % 4 != 0) md = 59;
 if (month = 4) md = 91;
 if (month = 5) md = 121;
 return md + day;
	
}

module.exports = DayOfYear;