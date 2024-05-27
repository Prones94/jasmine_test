
it('should calculate the monthly rate correctly', function () {
  // set up initial values or mock UI inputs
  const values = {
    amount: 10000,
    years: 8,
    rate: 13.5
  };
  expect(calculateMonthlyPayment(values)).toEqual(130)
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 6.8
  }
  expect(calculateMonthlyPayment(values)).toEqual()
});

it("should handle higher than normal interest rates", function(){
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  }
  expect(calculateMonthlyPayment(values)).toEqual('82.50')
})
