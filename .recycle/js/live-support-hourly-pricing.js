
$(document).ready(function () {

	resetFormContent();

	setInterval(processForm, 500);

});

function resetFormContent(){

	$("#billRate").val("100.00");

    $("#consumedFractionalHours").val("4.0");

    $("#exchangeRate").val("3764.6315");

}

function processForm() {

	console.debug(" -> :: processForm()");	

	//

	billRate=$("#billRate").val();

	console.debug("billRate: ", billRate);

    //

	consumedFractionalHours=$("#consumedFractionalHours").val();

	console.debug("consumedFractionalHours: ", consumedFractionalHours);

    //

    sessionTotalCost = billRate * consumedFractionalHours;

	console.debug("sessionTotalCost: ", sessionTotalCost);

    $("#sessionTotalCost").html("$" + sessionTotalCost);

    //

    amountToPayPal = sessionTotalCost;

    amountToPayPal = amountToPayPal - ( amountToPayPal * ( 2.89 / 100.0 ) )

	console.debug("amountToPayPal: ", amountToPayPal);

    $("#amountToPaypal").html("$" + Math.round(amountToPayPal));

    //

	exchangeRate=$("#exchangeRate").val();

	console.debug("exchangeRate: ", exchangeRate);

    //

    amountToValkyrie = amountToPayPal - 4.99; 

    amountToValkyrie = amountToValkyrie * exchangeRate;

	console.debug("amountToValkyrie: ", amountToValkyrie);

    $("#amountToValkyrie").html(amountToValkyrie+"");

    //

	amountToMateo = (amountToValkyrie * 0.9 ) - 15_000;

	console.debug("amountToMateo: ", amountToMateo);

    $("#amountToMateo").html(amountToMateo);

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
