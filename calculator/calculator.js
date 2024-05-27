window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountInput = document.getElementById('loan-amount')
  let yearsInput = document.getElementById('loan-years')
  let rateInput = document.getElementById('loan-rate')

  // Set default values
  const values = { amount: 13000, years: 10, rate: 13.5}
  amountInput.value = values.amount
  yearsInput.value = values.years
  rateInput.value = values.rate
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentInputValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentInputValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const {amount, years, rate } = values
  const monthlyRate = (rate / 100) / 12
  const numberOfPayments = Math.floor(years * 12)
  const monthlyPayment= (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
  return monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentItem = document.getElementById('monthly-payment')
  monthlyPaymentItem.innerText = `$${monthly}`
}
