
$(document).ready(function () {

	resetFormContent();

    //processForm();

	setInterval(processForm, 500);

});

function resetFormContent(){

	$("#carePackageUSD").val("250.00");

    $("#exchangeRate").val("3764.6315");

    $("#executeEnable")[0].checked=false;;

    $("#doMission")[0].checked=false;
}

function processForm() {

	console.debug(" -> :: processForm()");	

	//

	carePackageUSD=$("#carePackageUSD").val();

	console.debug("carePackageUSD: ", carePackageUSD);

    subtotal = carePackageUSD;

    //

    subtotal = subtotal - 4.99;

    subtotal=subtotal.toFixed(0);

	console.debug("subtotal [Xoom Transaction Fee]: ", subtotal);

    // $("#minusXoomTransactionFee").html("minus xoom transaction fee / $" + subtotal+" USD");

    $("#minusXoomTransactionFee").html("$" + subtotal);

    //

	exchangeRate=$("#exchangeRate").val();

	console.debug("exchangeRate: ", exchangeRate);

    subtotal = subtotal * exchangeRate;

   // subtotal=subtotal.toFixed(0);

	console.debug("subtotal [Amount To Valkyrie]: ", subtotal);

    amountToValkyrie = subtotal;

	console.debug("amountToValkyrie", amountToValkyrie);

    $("#amountToValkyrie").html(amountToValkyrie);



	//

	subtotal=subtotal * 0.9;

    subtotal=subtotal.toFixed(0);

	console.debug("subtotal [Less Shrink]: ", subtotal);

    $("#subtotalGross").html("gross cop / " + subtotal);

	//

    subtotal = subtotal - 15000;

    subtotal = subtotal.toFixed(0);

	console.debug("subtotal [Less Security Detail]: ", subtotal);

    $("#subtotalGross").html("gross cop / " + subtotal);

//

executeEnable=$("#executeEnable")[0].checked;

console.log("executeEnable",executeEnable);

if (executeEnable === true) {

    console.log("iexecuteEnable executeEnable executeEnable executeEnable");

    subtotal= subtotal - 40000;

    console.debug("subtotal [Less Delivery]: ", subtotal);

    $("#subtotalGross").html("gross cop / " + subtotal);

} else {

    console.log("nononono nononoonon");

}

// 

doMission=$("#doMission")[0].checked;

console.log("doMission",doMission);

if (doMission === true) {

    console.log("doMission doMission doMission doMission");

    subtotal= subtotal - 25000;

    console.debug("subtotal [Special Activity]: ", subtotal);

    $("#subtotalGross").html("gross cop / " + subtotal);

} else {

    console.log("nononono nononoonon");

}

//

	console.debug("subtotal [Amount To Valkyrie]: ", subtotal);

    $("#amountToMateo").html( "" + subtotal + "" );

    amountToMateo =subtotal;

//

    feeAmount = amountToValkyrie - amountToMateo; 
        
    $("#feeAmount").html( "" + feeAmount + "" );

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

