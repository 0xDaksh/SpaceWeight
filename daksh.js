var app = new Vue({
  el: '#app',
  data: {
    mass: 0,
    earth: 0,
    mercury: 0,
    venus: 0,
    mars: 0,
    jupiter: 0,
    saturn: 0,
    neptune: 0,
    uranus: 0,
    pluto: 0,
    moon: 0,
    ceres: 0,
    titan: 0,
    europa: 0
  },
  methods: {
      calc: function(evt){
        this.mass = evt.target.value / 9.807;
        this.earth = evt.target.value;
        this.mercury = this.mass * 3.7;
        this.venus = this.mass * 8.87;
        this.mars = this.mass * 3.711;
        this.jupiter = this.mass * 24.79;
        this.saturn = this.mass * 10.44;
        this.neptune = this.mass * 11.15;
        this.uranus = this.mass * 8.69;
        this.pluto = this.mass * 0.62;
        this.moon = this.mass * 1.622;
        this.ceres = this.mass * 0.27;
        this.titan = this.mass * 1.352;
        this.europa = this.mass * 315;
      }
  }
});
