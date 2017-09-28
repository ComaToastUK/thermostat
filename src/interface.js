$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

$('#temp-up').on('click', function() { // event listener
  thermostat.turnUp(); // update model
  updateTemperature();
});

$('#temp-down').click(function() {
  thermostat.turnDown();
  updateTemperature();
});

$('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powerSaverOn();
    $('#power-saving').text('on');
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.powerSaverOff();
    $('#power-saving').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
