function DayOfYear(year, month, day) {
	
 let md=0;

 if (month == 2) md = 31;
 if (month == 3 && year %2 == 0) md = 60;
 if (month == 3 && year %2 !=0 ) md = 59;
 if (month == 4) md = 91;
 if (month == 5) md = 121;
 if (month == 6) md = 152;
 if (month == 7) md = 182;
 if (month == 8) md = 213;
 if (month == 9) md = 244;
 if (month == 10) md = 274;
 if (month == 11) md = 305;
 if (month == 12) md = 335;

 if (month > 3 && year%4 != 0) return md + day - 1;
 if (month > 3 && year%4 == 0) return md + day;
 else return md + day;	
}

module.exports = DayOfYear;
