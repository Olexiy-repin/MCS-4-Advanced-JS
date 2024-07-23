const timer = {
  deadline: new Date('2024-07-23T22:50:00'),
  elements: {
    days: document.querySelector('.js-timer__days'),
    hours: document.querySelector('.js-timer__hours'),
    minutes: document.querySelector('.js-timer__minutes'),
    seconds: document.querySelector('.js-timer__seconds'),
  },
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline.getTime() - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      let { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.elements.days.textContent = this.pad(days);
      this.elements.hours.textContent = this.pad(hours);
      this.elements.minutes.textContent = this.pad(minutes);
      this.elements.seconds.textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

timer.start();
