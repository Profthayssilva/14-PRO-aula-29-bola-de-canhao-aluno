class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    // Crie o corpo circular com os parâmetros
   
    // adicionar a imagem às balas de canhão.

    this.image = loadImage("./assets/cannonball.png");
    
  }

  shoot() {

    // Use a função predefinida para definir a velocidade e multiplicar o ângulo.
   
    velocity.mult(20);
 
    // Adicione o valor de static para bala de canhão.
    

    // Adicione a função para setVelocity() e defina a velocidade x e y de acordo com os
// parâmetros. E após isso, teste o projeto.
    
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    }
  }

