let initDate;
let timeDifference = 0
let hasInitDate = false;

cookieArr = document.cookie.split(";");


for (const element of cookieArr) {
	if (element.split("=")[0] == "init-date"){
		hasInitDate = true;
		initDate = element.split("=")[1];
	} 
}

if (!hasInitDate) {
	document.cookie = "init-date =" + new Date() + ";max-age=9999999999999999";
} else {
	let now = new Date();
	document.cookie = "new-date=" + now + "; max-age=9999999999999999"
	timeDifference = now.getTime() - initDate.getTime();
}
let timeSpent = document.getElementById("time-spent");
let numHours = Math.floor(timeDifference  / 360000);
let numMins = Math.floor((timeDifference % 360000) * 60);
let diffStr = numHours + ":" + numMins;
timeSpent.innerText = diffStr;
