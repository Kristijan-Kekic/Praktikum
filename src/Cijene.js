function Cijene(year, month, day) {
	
 let md = 0;
 if (month = 2) md = 31;
 if (month = 3 && year % 4 == 0) md = 60;
 if (month = 3 && year % 4 != 0) md = 59;
 if (month = 4) md = 91;
 if (month = 5) md = 121;
 
 if (md > 0 && md < 31)
	return 34.5;
 if (md > 31 && md < 60 && year % 4 == 0)
	return 37.0;
 if (md > 31 && md < 59 && year % 4 != 0)
	return 37.0;
 if (md > 60 && md < 137)
	return 39.0;
 if (md > 136 && md < 167)
	return 37.0;
	
}

module.exports = Cijene;