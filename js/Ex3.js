
// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.r = random(1,8);
        this.xSpeed = random(2,-1);
        this.ySpeed = random(-1,1);
      }
    
    // creation of a particle.
      createParticle() {
        noStroke();
        fill('#E07DC8');
        circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=10;
        if(this.y < 0 || this.y > height)
          this.ySpeed*=10;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
      joinParticles(particles) {
        particles.forEach(element =>{
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis<85) {
            line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }
    
    // an array to add multiple particles
    let particles = [];
    
    function setup() {
      createCanvas(400, 400);
  
      translate(windowWidth / 2, windowHeight / 2);    
      for(let i = 10;i<width/4;i++){
        particles.push(new Particle());
      }
    }
    
    function draw() {
      background('#0E0C0A');
      for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    }
    
  
  