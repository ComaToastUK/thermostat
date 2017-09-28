$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

$('#temp-up').on('click', function() { // event listener
  thermostat.turnUp(); // update model
  $('#temperature').text(thermostat.temperature); // update view
});

$('#temp-down').click(function() {
  thermostat.turnDown();
  $('#temperature').text(thermostat.temperature);
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

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
});
