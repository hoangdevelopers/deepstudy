import { BaseElment } from "@/modules/player/framework/BaseElement";
import { Drag } from '@/modules/player/elements/Drag/Drag';
declare var HOST: any;
const BALANCE_ASSETS = {
  atlas: {
    main: {
      img: HOST + "/assets/M3-16-1-1(Sample3)/M3-16-1-1.png",
      json: HOST + "/assets/M3-16-1-1(Sample3)/M3-16-1-1.json"
    }
  }
};

export class Balance extends BaseElment {
  static assets = BALANCE_ASSETS;
  body!: Phaser.GameObjects.Container;
  arm!: Phaser.GameObjects.Container;
  armBody!: Phaser.GameObjects.Image;
  armIdle!: Phaser.GameObjects.Image;
  baskeLeft!: Phaser.GameObjects.Image;
  baskeAppleLeft!: Phaser.GameObjects.Image;
  baskeRight!: Phaser.GameObjects.Image;
  baskeWaterMelonRight!: Phaser.GameObjects.Image;
  originalBaskeRightCenter!: Phaser.Geom.Point;
  originalBaskeLeftCenter!: Phaser.Geom.Point;

  constructor(scene: Phaser.Scene, config: any = {}) {
    super(scene, {...config, active: true });
  }
  
  protected onCreate() {
    const balancerposition = new Phaser.Geom.Point(this.scene.centerX, this.scene.centerY);

    const armIdle = this.armIdle =  this.scene.add.image(0, -50, 'main', 'balance-arm-idle');

    const originalBaskeLeftCenter = this.originalBaskeLeftCenter = new Phaser.Geom.Point(-(armIdle.width - 100) / 2, 100);
    const originalBaskeRightCenter = this.originalBaskeRightCenter = new Phaser.Geom.Point((armIdle.width - 100) / 2, 100);


    const baskeLeft = this.baskeLeft = this.scene.add.image(originalBaskeLeftCenter.x, originalBaskeLeftCenter.y, 'main', 'balance-basket');
    const baskeAppleLeft = this.baskeAppleLeft = this.scene.add.image(originalBaskeLeftCenter.x, originalBaskeLeftCenter.y, 'main', 'balance-arm-basket-apple');
    const baskeRight = this.baskeRight = this.scene.add.image(originalBaskeRightCenter.x, originalBaskeRightCenter.y, 'main', 'balance-basket');
    const baskeWaterMelonRight = this.baskeWaterMelonRight = this.scene.add.image(originalBaskeRightCenter.x, originalBaskeRightCenter.y, 'main', 'balance-arm-basket-watermelon');
    baskeLeft.setOrigin(0.5, 0);
    baskeAppleLeft.setOrigin(0.5, 0);
    baskeRight.setOrigin(0.5, 0);
    baskeWaterMelonRight.setOrigin(0.5, 0);
    const zone1 = this.scene.add.zone(originalBaskeLeftCenter.x, originalBaskeLeftCenter.y, 320, 200).setRectangleDropZone(300, 200);
    const arrowLeft = this.scene.add.image(originalBaskeLeftCenter.x, 50, 'main', 'arrow-left');
    const apple = this.scene.add.image(originalBaskeLeftCenter.x, -40, 'main', 'apple');
    apple.setOrigin(0.5, 1);
    arrowLeft.setOrigin(0.5, 1);
    apple.setInteractive();
    
    const zone2 = this.scene.add.zone(originalBaskeRightCenter.x, originalBaskeRightCenter.y, 320, 200).setRectangleDropZone(300, 200);
    const arrowRight = this.scene.add.image(originalBaskeRightCenter.x, 50, 'main', 'arrow-right');
    const watermelon = this.scene.add.image(originalBaskeRightCenter.x, -40, 'main', 'watermelon');
    arrowRight.setOrigin(0.5, 1);
    watermelon.setOrigin(0.5, 1);
    watermelon.setInteractive();
    zone1.setOrigin(0.5, 0);
    zone2.setOrigin(0.5, 0);


    const arm = this.arm = this.scene.add.container(balancerposition.x, balancerposition.y - 150, [ armIdle, baskeLeft, baskeAppleLeft, baskeRight, baskeWaterMelonRight, zone1, zone2, arrowLeft, apple, arrowRight, watermelon ]);
    armIdle.setOrigin(0.5, 0);

    const armBody = this.armBody = this.scene.add.image(balancerposition.x, balancerposition.y, 'main','balance-arm-body');

    const balance = this.scene.add.group([armBody, arm]);
    this.host = balance;
    // setup drag
    
    this.scene.input.setDraggable(apple, 1);
    const blinkingArrow1 = this.scene.tweens.add({ targets: arrowLeft, repeat: -1, alpha: 0});
    const drag1 = new Drag(this.scene, {
      x: 0,
      dropbg: baskeLeft,
      dragSprite: apple,
      dropActiveBg: baskeAppleLeft,
      target: apple,
      zone: zone1
    });
    //
    
    this.scene.input.setDraggable(watermelon, 1);
    const blinkingArrow2 = this.scene.tweens.add({ targets: arrowRight, repeat: -1, alpha: 0});
    const drag2 = new Drag(this.scene, {
      x: 880,
      dropbg: baskeRight,
      dragSprite: watermelon,
      dropActiveBg: baskeWaterMelonRight,
      target: watermelon,
      zone: zone2
    });
    drag1.on('DragDrop', () => {
      blinkingArrow1.stop();
      arrowLeft.setVisible(false);
      this.checkBalance(drag1, drag2);
    });
    drag2.on('DragDrop', () => {
      blinkingArrow2.stop();
      arrowRight.setVisible(false);
      this.checkBalance(drag1, drag2);
    });
    
  }
  checkBalance(drag1: Drag, drag2: Drag) {
    if (drag1.done && drag2.done) {
      this.rotateArm(0);
    } else if (drag1.done) {
      this.rotateArm(-0.3);
    } else {
      this.rotateArm(0.3);
    }
  }
  affterCreate() {
    this.rotateArm(0);
  }

  private rotateArm(rad: number) {
    (<any>this.arm).setRotation(rad);
    this.baskeLeft.setRotation(-rad);
    this.baskeRight.setRotation(-rad);
  }

  preUpdate() {
    // this.rotateArm((<any>this.arm).rotation + 0.01);
  }


}
