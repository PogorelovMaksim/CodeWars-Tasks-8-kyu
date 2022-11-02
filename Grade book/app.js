function getGrade(s1, s2, s3) {
	const summ = (s1 + s2 + s3) / 3;
	if (summ >= 90) {
		return 'A'
	} else if (summ >= 80 && summ < 90) {
		return 'B'
	} else if (summ >= 70 && summ < 80) {
		return 'C'
	} else if (summ >= 60 && summ < 70) {
		return 'D'
	} else if (summ >= 0 && summ < 60) {
		return 'F'
	}
}