import { BaseElment } from "@/modules/player/framework/BaseElement";

const DRAWING_ASSETS = {
  images: {
    star: "/assets/SAMPLE 1 Phonics/Graphic/image_star.png"
  }
};

export class Drawing extends BaseElment {
  static assets = DRAWING_ASSETS;
  words!: any[];
  activePath: number = 0;
  paths!: Phaser.GameObjects.Image[];
  bg!: Phaser.GameObjects.Image;
  star!: Phaser.GameObjects.Image;
  dragEnd!: boolean;
  constructor(scene: Phaser.Scene, config: any = {}) {
    super(scene, { ...config, active: true });
  }

  get currentPath() : Phaser.GameObjects.Image {
    return this.paths[this.activePath];
  }

  get currentPathStartX(): number {
    return this.config.paths[this.activePath].from.x;
  }

  get currentPathStartY(): number {
    return this.config.paths[this.activePath].from.y;    
  }

  get currentPathEndX(): number {
    return this.config.paths[this.activePath].to.x;
  }

  get currentPathEndY(): number {
    return this.config.paths[this.activePath].to.y;    
  }



  protected onCreate() {
    this.createWord();
  }

  beboreCreate() {
    console.log('before')
    this.words = [];
    this.paths = [];
    this.activePath = 0;
  }

  private createWord() {
    const word = this.scene.add.container(
      this.scene.centerX,
      this.scene.centerY
    );
    this.words.push(word);

    const painGroup = this.scene.add.group([]);

    const bg = (this.bg = this.scene.add.image(0, 0, this.config.bg));
    bg.depth = (2);
    word.add(bg);

    for (const path of this.config.paths) {
      const pathImg = this.scene.add.image(0, 0, path.img);
      pathImg.depth = (3);
      this.paths.push(pathImg);
      word.add(pathImg);
    }
    console.log('path', this.paths)
    const star = this.star = this.scene.add.image(0, 0, "star");
    star.setScale(0.7);
    word.add(star);
    star.setInteractive();
    star.setDataEnabled();
    star.data.set('custom-drag', true);
    star.depth = (5);

    this.scene.input.setDraggable(star, 999);
    this.scene.input.on('dragend', (pointer: any, gameObject: any, dragX: any, dragY: any) => {
      if( gameObject === this.star) {
        if( this.dragEnd) {
          this.star.setPosition(this.currentPathStartX, this.currentPathStartY);
        }
        this.dragEnd = false;
      }
    }, this);
    this.scene.input.on('drag',  (pointer: any, gameObject: any, dragX: any, dragY: any) => {
        if( gameObject === this.star) {
            if(Math.sqrt(Math.pow(dragX - this.currentPathEndX, 2) + Math.pow(dragY - this.currentPathEndY, 2)) < 10){
              if (this.activePath === this.paths.length-1) {
                this.onCompleted();
                return;
              } 
              this.dragEnd = true;
              this.nextPath();
            } else {
              gameObject.x = dragX;
              gameObject.y = dragY;
            }
            
        }
    })
  }

  affterCreate() {
    this.showPath();
  }

  showPath() {
      this.paths.forEach(path => path.setVisible(false));
      this.currentPath.setVisible(true);
      this.star.setPosition(this.currentPathStartX, this.currentPathStartY);
  }
  onCompleted() {
    alert('Completed')
    this.currentPath.setVisible(false);
    this.star.setVisible(false);
  }

  nextPath() {
    this.activePath++;
    this.showPath();
  }
}
