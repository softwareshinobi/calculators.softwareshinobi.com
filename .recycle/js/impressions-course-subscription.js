
$(document).ready(function () {

    alert("impressions course subs");

	clearFormContent();

	setInterval(processForm, 500);

});

function clearFormContent(){

	$("#monthlyRevenue").html("--");

    $("#subscriptionCost").val("13.99");

    $("#subscriptionCount").val("42");

    // $("#topArea").click();
    // setInputValue("");
    // setLabelValue("");
    // $("#bottomArea").click();
    // $("#percentageOutputButton").html("--");

}

function processForm() {

	console.debug(" -> :: processForm()");	

	//

	subscriptionCost=$("#subscriptionCost").val();

	console.debug("subscriptionCount: ", subscriptionCost);

    //

	subscriptionCount=$("#subscriptionCount").val();

	console.debug("subscriptionCount: ", subscriptionCount);

	//

	monthlyRevenue=subscriptionCost*subscriptionCount;

	console.debug("monthlyRevenue: ", monthlyRevenue);

	$("#monthlyRevenue").html(monthlyRevenue.toFixed(0)+" monthly USD");

	//

	weeklyRevenue=monthlyRevenue /4.0;

	console.debug("weeklyRevenue: ", weeklyRevenue);

	$("#weeklyRevenue").html(weeklyRevenue.toFixed(0)+" weekly USD");

	//

	dailyRevenueUSD=weeklyRevenue /7.0;

	console.debug("dailyRevenueUSD: ", dailyRevenueUSD);

	$("#dailyRevenueUSD").html(dailyRevenueUSD.toFixed(0)+" daily USD");

	//

	dailyRevenueCOP=dailyRevenueUSD * 4000;

	console.debug("dailyRevenueCOP: ", dailyRevenueCOP);

	$("#dailyRevenueCOP").html(dailyRevenueCOP.toFixed(0)+" daily COP");

	//
	console.debug(" <- :: processForm()");

}

function clearButtonValue() {

	console.debug(" -> :: clearButtonValue()");	

	$("#percentageOutputButton").html("");

	console.debug(" <- :: clearButtonValue()");
}

function setButtonValue(percentageDifference) {

	console.debug(" -> :: setButtonValue()");	

const result = parseFloat(1.0-percentageDifference)*100;

aaaa = +result.toFixed(1) + "% different";

	$("#percentageOutputButton").html(aaaa);

	console.debug(" <- :: setButtonValue()");

}

