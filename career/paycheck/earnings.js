

// Constants
const DEFAULT_HOURS_PER_YEAR = 2080;
const PAYCHECK_REDUCTION_MULTIPLIER = 0.6985;
const SEMI_MONTHLY_PERIODS = 24;
const NUMBER_OF_DIGITS_OF_PRECISION = 0;

// Track which field is being updated
let isUpdatingHourly = false;
let isUpdatingYearly = false;



// Helper function to format numbers with commas and specified precision
function formatNumber(number, decimals) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(number);
}



// Update calculations based on input
function updateCalculations(event) {
    // Skip if this update is triggered by code (not user input)
    if (isUpdatingHourly || isUpdatingYearly) {
        return;
    }

    const targetId = event.target.id;
    const hourlyWage = parseFloat($("#hourlyWage").val()) || 0;
    const yearlySalary = parseFloat($("#yearlySalary").val()) || 0;

    if (targetId === "hourlyWage") {
        // User updated hourly wage, calculate annual
        isUpdatingYearly = true;
        const annualEquivalent = hourlyWage * DEFAULT_HOURS_PER_YEAR;
        $("#yearlySalary").val(annualEquivalent.toFixed(NUMBER_OF_DIGITS_OF_PRECISION));
        isUpdatingYearly = false;
    } else if (targetId === "yearlySalary") {
        // User updated yearly salary, calculate hourly
        isUpdatingHourly = true;
        const hourlyEquivalent = yearlySalary / DEFAULT_HOURS_PER_YEAR;
        $("#hourlyWage").val(hourlyEquivalent.toFixed(2));
        isUpdatingHourly = false;
    }

    // Calculate and update results
    const currentHourly = parseFloat($("#hourlyWage").val()) || 0;

    const currentYearly = parseFloat($("#yearlySalary").val()) || 0;

    const netAnnual = currentYearly * PAYCHECK_REDUCTION_MULTIPLIER;
    const semiMonthly = netAnnual / SEMI_MONTHLY_PERIODS;

    //
    // Update results section
    //

    $("#hourlyEquivalent").text(formatNumber(currentHourly, 2));
    $("#annualEquivalent").text(formatNumber(currentYearly, NUMBER_OF_DIGITS_OF_PRECISION));
    $("#netAnnual").text(formatNumber(netAnnual, NUMBER_OF_DIGITS_OF_PRECISION));
    $("#semiMonthly").text(formatNumber(semiMonthly, NUMBER_OF_DIGITS_OF_PRECISION));

}


// Event listeners for real-time updates
$(document).ready(function () {
    $("#hourlyWage, #yearlySalary").on("input", updateCalculations);
});
