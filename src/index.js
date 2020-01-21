export default function (target, weekStart) {
	var i=0, j=0, week, out=[], date = new Date(target || new Date);
	var year = date.getFullYear(), month = date.getMonth();

	// day index (of week) for 1st of month
	var first = new Date(year, month, weekStart == null ? 1 : weekStart).getDay();

	// how many days there are in this month
	var days = new Date(year, month+1, 0).getDate();

	while (i < days) {
		for (j=0, week=new Array(7); j < 7;) {
			while (j < first) week[j++] = 0;
			week[j++] = ++i > days ? 0 : i;
			first = 0;
		}
		out.push(week);
	}

	return out;
}
