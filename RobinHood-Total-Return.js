var cell, totRetStr, totRetNum, svgClass = null;
var totRetSum = 0;
var totRetIndDiv = 9;
var totRetIndSpan = 2;
var negSvgClass = '_2mbK0Mw-5HM4q7eeuDqOau';
var rows = $('._35i1NVinE8wTOLz3sUynSw>div').childNodes;
var gainInd = '';
for (var i = 0; i < rows.length; i++) {
	cell = rows[i].getElementsByTagName('div')[totRetIndDiv];
	totRetStr = cell.getElementsByTagName('span')[totRetIndSpan].innerText;
	totRetNum = Number(totRetStr.replace(/[^0-9.-]+/g,""));
	svgClass = cell.getElementsByTagName('svg')[0];
	if (svgClass.classList.contains(negSvgClass)) {
		totRetNum *= -1;
		gainInd = '-';
	} else {
		gainInd = '+';
	}
	totRetSum += totRetNum;
	//console.log("Total Return: " + totRetSum + "\tGain: " + totRetNum);
}
console.log("Total Return: " + Math.round((totRetSum + Number.EPSILON) * 100) / 100);