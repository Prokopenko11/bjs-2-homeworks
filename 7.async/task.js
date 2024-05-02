class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    console.log(time, callback);
    if(time === null || callback === undefined) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    for(let alarm of this.alarmCollection) {
      if(alarm.time === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }

    let alarm = {time, callback, canCall: true}
    this.alarmCollection.push(alarm)
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    return hours + ':' + minutes;
  }

  start() {
    if (this.intervalId !== null) return;
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}