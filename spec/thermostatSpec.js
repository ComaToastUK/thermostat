"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees
  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("knows the currentTemperature", function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  // You can decrease the temperature with a down function
  it("should be able to turn down the temperature", function() {
    thermostat.turnDown();
    expect(thermostat.temperature).toEqual(19);
  });
  // You can increase the temperature with an up function
  it("should be able to turn up the temperature", function() {
    thermostat.turnUp();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should only go down to a minimum of 10 degress", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.turnDown();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });
  // The minimum temperature is 10 degrees
  it("should have a MINIMUMTEMP of 10", function() {
    expect(thermostat.MINIMUMTEMP).toEqual(10);
  });

  it("can tell us when it is at minimum temperature", function() {
    expect(thermostat.isMinimumTemp()).toEqual(false);
  });
  // Power saving mode is on by default
  it("has a powersaving mode which is switched on by default", function() {
    expect(thermostat.isPowerSaving()).toEqual(true);
  });
  // If power saving mode is on, the maximum temperature is 25 degrees
  it("has a maxiumum temperature of 25 degrees in power saving mode", function() {
    thermostat.powerSaving = true;
    expect(thermostat.maximumTemp).toEqual(25);
  });

  it("should only go up to the maximum temperature of 25 degrees", function() {
    for (var i = 0; i < 6; i++) {
      thermostat.turnUp();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
    expect(thermostat.powerSaving).toBe(true);
  });
  // If power saving mode is off, the maximum temperature is 32 degrees
  it("has a maxiumum temperature of 32 degrees with power saving turned off", function() {
    thermostat.powerSaverOff();
    expect(thermostat.maximumTemp).toEqual(32);
  });

  it("should only go up to the maximum temperature of 32 degrees with power savin off", function() {
    thermostat.powerSaverOff();
    for (var i = 0; i < 13; i++) {
      thermostat.turnUp();
    }
    expect(thermostat.currentTemperature()).toEqual(32);
    expect(thermostat.powerSaving).toBe(false);
  });
  // You can reset the temperature to 20 with a reset function
  it("can reset the temperature to 20 degrees with a reset function", function() {
    thermostat.reset;
    expect(thermostat.isPowerSaving()).toEqual(true);
    expect(thermostat.temperature).toEqual(20);
    expect(thermostat.maximumTemp).toEqual(25);
  });

  it("can turn power saving off", function() {
    thermostat.powerSaverOff();
    expect(thermostat.powerSaving).toEqual(false);
    expect(thermostat.maximumTemp).toEqual(32);
  });
  // You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage
  it("can display when energyUsage levels are low", function() {
    thermostat.temperature = 17;
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("can display when energyUsage levels are medium", function() {
    thermostat.temperature = 20;
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("can display when energyUsage levels are high", function() {
    thermostat.temperature = 26;
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });
});
