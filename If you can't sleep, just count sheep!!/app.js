const countSheep = function (num) {
	let a = ""
	for (let i = 0; i < num; i++)
		a += `${i + 1} ${"sheep..."}`
	return a
}