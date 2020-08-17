export class Driver {
  constructor(name) {
    this.name = name;
    this.minutes = 0;
    this.miles = 0;
    this.mph = 0;
  }

  addTrip(trip) {
    const minutes =
      this.convertMinutes(trip.endTime) - this.convertMinutes(trip.startTime);
    this.addMinutes(minutes);
    this.addMiles(trip.milesDriven);
    this.updateMph();
  }

  convertMinutes(time) {
    const hours = parseInt(time.split(":")[0], 10);
    let minutes = parseInt(time.split(":")[1], 10);

    minutes += hours * 60;
    return minutes;
  }

  addMinutes(minutes) {
    this.minutes += minutes;
  }

  addMiles(miles) {
    this.miles += parseFloat(miles, 10);
  }

  updateMph() {
    this.mph = Math.round(this.miles / (this.minutes / 60));
  }
}
