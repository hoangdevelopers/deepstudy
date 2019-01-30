import { BaseElment } from "@/modules/player/framework/BaseElement";

const DRAWING_ASSETS = {
  images: {
    star: "/assets/SAMPLE 1 Phonics/Graphic/image_star.png"
  }
};

export class Drawing extends BaseElment {
  static assets = DRAWING_ASSETS;
  words: any[] = [];
  activePath: number = 0;
  paths: Phaser.GameObjects.Image[] = [];
  bg!: Phaser.GameObjects.Image;
  star!: Phaser.GameObjects.Image;

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



  protected onCreate() {
    this.createWord();
  }

  beboreCreate() {
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

    const star = this.star = this.scene.add.image(0, 0, "star");
    star.setScale(0.7);
    word.add(star);
    star.setInteractive();
    star.setDataEnabled();
    star.data.set('custom-drag', true);
    star.depth = (5);

    this.scene.input.setDraggable(star, 999);
    this.scene.input.on('drag',  (pointer: any, gameObject: any, dragX: any, dragY: any) => {
        if( gameObject == this.star) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            const  paint = this.scene.add.graphics();
            paint.fillStyle(0x000000);
            paint.fillCircle(dragX, dragY, 20);
            word.add(paint);
            paint.depth = 1;
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

  nextPath() {}
}
