
$(document).ready(function () {

//    alert("impressions-to-product-sales");

	resetFormContent();

    //processForm();

	setInterval(processForm, 500);

});

function resetFormContent(){

	$("#numberImpressionsPerPost").val("13000");

    $("#clickThruPCT").val(".02");

	$("#conversionRatePCT").val(".05");

    $("#revenuePerConversion").val("13.99");

    $("#executeEnable")[0].checked=false;;

    $("#doMission")[0].checked=false;
}

function processForm() {

	console.debug(" -> :: processForm()");	

	//

	numberImpressionsPerPost=$("#numberImpressionsPerPost").val();

	clickThruPCT=$("#clickThruPCT").val();

	console.debug("numberImpressionsPerPost: ", numberImpressionsPerPost);

   // subtotal = numberImpressionsPerPost;

    //

    subtotal = numberImpressionsPerPost * clickThruPCT;

 //   subtotal=subtotal.toFixed(0);

	console.debug("subtotal [Xoom Transaction Fee]: ", subtotal);

    $("#minusXoomTransactionFee").html( numberImpressionsPerPost);

 	console.debug("amountToValkyrie", amountToValkyrie);

    $("#amountToValkyrie").html(subtotal);

    //

	conversionRatePCT=$("#conversionRatePCT").val();

	console.debug("conversionRatePCT: ", conversionRatePCT);

    estimatedConversions = subtotal * conversionRatePCT;

   // subtotal=subtotal.toFixed(0);

	console.debug("estimatedConversions: ", estimatedConversions);

 //   amountToValkyrie = subtotal;

	//console.debug("subtotal [Less Shrink]: ", subtotal);

    console.log(estimatedConversions);

    $("#feeAmount").html(estimatedConversions);

    costPerConversion =   $("#revenuePerConversion").val();

    console.log("costPerConversion",costPerConversion);

revunueTotalConversions = estimatedConversions * costPerConversion;

    console.log("revunueTotalConversions",revunueTotalConversions);

    $("#amountToMateo").html(revunueTotalConversions);

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

