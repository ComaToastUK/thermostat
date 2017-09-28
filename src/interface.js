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

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var api2 = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
    $.get(api + city + api2, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });
});
