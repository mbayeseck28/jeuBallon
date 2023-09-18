class Personnage {
  constructor() {
    this.element = document.querySelector('.perso');
    this.animationClass = 'animation';
  }

  sauter() {
    if (!this.element.classList.contains(this.animationClass)) {
      this.element.classList.add(this.animationClass);
      setTimeout(() => {
        this.element.classList.remove(this.animationClass);
      }, 500);
    }
  }
}
const instancePerso = new Personnage();
const bouton = document.getElementById('monBouton');
bouton.addEventListener('click', () => instancePerso.sauter());

class Obstacle {
  constructor() {
    this.element = document.querySelector('.obstacles');
    this.animationNone = 'none';
  }

  stopAnimation() {
    this.element.style.animation = this.animationNone;
  }
}

class Jeu {
  constructor() {
    this.personnage = new Personnage();
    this.obstacle = new Obstacle();
    this.interval = setInterval(() => {
      this.verifierCollision();
    }, 1);
  }

  verifierCollision() {
    const persoTop = parseInt(
      window.getComputedStyle(this.personnage.element).getPropertyValue('top')
    );
    const obstaclesLeft = parseInt(
      window.getComputedStyle(this.obstacle.element).getPropertyValue('left')
    );

    if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
      this.obstacle.stopAnimation();
      clearInterval(this.interval);
      alert('Vous avez perdu');
    }
  }
}

const jeu = new Jeu();
