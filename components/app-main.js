Polymer({
  
  elapsedTime : 0,
  
  lastTime : 0,
  
  showTime: 0,
  
  hours: "00",
  
  minutes: "00",
  
  seconds: "00",
  
  stopped: true,
  
  ready: function () {
    window.requestAnimationFrame(this.updateTime.bind(this));
  },
  
  start: function () {
    this.stopped = false;
  },
  
  stop: function () {
    this.stopped = true;
  },
  
  restart: function () {
    this.showTime = 0;
    this.elapsedTime = 0;
    
    this.parseTime();
  },
  
  updateTime: function (e) {
    if (this.stopped) {
      this.lastTime = 0;
    }
    
    else {
      
      if (this.lastTime === 0)
      {
        this.lastTime = e;
      }
      else {
        this.elapsedTime += e - this.lastTime;
        this.lastTime = e;
        
        this.showTime = this.elapsedTime/1000;
        
        this.parseTime();
      }
      
    }
    window.requestAnimationFrame(this.updateTime.bind(this));
  },
  
  parseTime: function () {
    var d = new Date(this.elapsedTime);
    
    this.hours = ("0"+d.getUTCHours().toString()).slice(-2,3);
    
    this.minutes = ("0"+d.getUTCMinutes().toString()).slice(-2,3);
    
    this.seconds = ("0"+d.getUTCSeconds().toString()).slice(-2,3);
  }
  
});
