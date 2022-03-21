(function($) {
  function calculate() {
    var pumps = document.getElementById('pumps').value,
        cost = 294.06,
        costYear = pumps * cost,
        fiveYear = costYear * 5,
        powerCon = 2803.2,
        powerConY= powerCon * pumps;

      document.getElementById('lipSealCost').innerHTML = costYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
      document.getElementById('annualYear').innerHTML = costYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
      document.getElementById('powerConsumption').innerHTML = powerConY.toLocaleString("en-GB");
      document.getElementById('fiveYear').innerHTML = fiveYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
  }

  $(document).ready(function() {
    document.getElementById('calculate').addEventListener("click", function() {
      calculate();
    });
  });
})(jQuery);
