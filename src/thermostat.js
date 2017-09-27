function Thermostat() {
  this.temperature = 20
  this.MINIMUMTEMP = 10
  this.maximumTemp = 25
  this.powerSaving = true
}

Thermostat.prototype.turnDown = function() {
  if (this.temperature > this.MINIMUMTEMP) {
    this.temperature -= 1;
  } else {}
  };

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
  };

Thermostat.prototype.turnUp = function() {
  if (this.temperature < this.maximumTemp) {
    this.temperature += 1;
  } else {}
  };

Thermostat.prototype.isMinimumTemp = function() {
  return this.temperature === this.MINIMUMTEMP;
};

Thermostat.prototype.isPowerSaving = function() {
  return this.powerSaving === true
};

Thermostat.prototype.powerSaverOff = function() {
    this.powerSaving = false;
    this.maximumTemp = 32;
  };

Thermostat.prototype.powerSaverOn = function() {
  this.powerSaving = true;
  this.maximumTemp = 25;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.powerSaverOn;
  };
