const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const managedMoney = parseFloat(document.getElementById('managed-money').value);
  const managementFee = parseFloat(document.getElementById('management-fee').value) / 100;
  const performanceFee = parseFloat(document.getElementById('performance-fee').value) / 100;
  const returns = parseFloat(document.getElementById('returns').value);

  const managementFeeRevenue = managedMoney * managementFee;
  const performanceFeeRevenue = returns * performanceFee;
  const totalRevenue = managementFeeRevenue + performanceFeeRevenue;

  resultDiv.innerHTML = `
    <p>Management Fee Revenue: $${managementFeeRevenue.toFixed(2)}</p>
    <p>Performance Fee Revenue: $${performanceFeeRevenue.toFixed(2)}</p>
    <p>Total Revenue: $${totalRevenue.toFixed(2)}</p>
  `;
});
