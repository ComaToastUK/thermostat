// 'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
    console.log(thermostat.temperature);
  });

  it('knows the currentTemperature', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it("should be able to turn down the temperature", function() {
    thermostat.turnDown();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should be able to turn up the temperature", function() {
    thermostat.turnUp();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should only go down to a minimum of 10 degress', function() {
    for(var i = 0 ; i < 11 ; i++) {
      thermostat.turnDown();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('should have a MINIMUMTEMP of 10', function() {
    expect(thermostat.MINIMUMTEMP).toEqual(10);
  });

  it('can tell us when it is at minimum temperature', function(){
    expect(thermostat.isMinimumTemp()).toEqual(false);
  });

  it('has a powersaving mode which is switched on by default', function() {
    expect(thermostat.isPowerSaving()).toEqual(true);
  });

  it('has a maxiumum temperature of 25 degrees in power saving mode', function(){
    thermostat.powerSaving = true
    expect(thermostat.maximumTemp).toEqual(25)
  })

  it('has a maxiumum temperature of 32 degrees with power saving turned off', function() {
    thermostat.powerSaverOff();
    expect(thermostat.maximumTemp).toEqual(32);
  })

  it('can reset the temperature to 20 degrees with a reset function', function() {
    thermostat.reset
    expect(thermostat.powerSaving).toEqual(true)
    expect(thermostat.temperature).toEqual(20)
    expect(thermostat.maximumTemp).toEqual(25)
  })

});
