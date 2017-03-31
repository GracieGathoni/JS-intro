function calculateSupply (age, amountperday) {
	var max = 120;
	var lifetime = (max - age) + 10;
	console.log('you will need ' +lifetime+ ' to last you until the ripe old 
		age of ' +max);
}
calculateSupply(19, 5);
calculateSupply(20, 2);
calculateSupply(40, 1);