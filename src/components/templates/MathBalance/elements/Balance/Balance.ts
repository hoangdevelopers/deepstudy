import { BaseElment } from "@/modules/player/framework/BaseElement";

const BALANCE_ASSETS = {
  atlas: {
    main: {
      img: "http://localhost:8080/assets/M3-16-1-1(Sample3)/M3-16-1-1.png",
      json: "http://localhost:8080/assets/M3-16-1-1(Sample3)/M3-16-1-1.json"
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
  baskeRight!: Phaser.GameObjects.Image;
  originalBaskeRightCenter!: Phaser.Geom.Point;
  originalBaskeLeftCenter!: Phaser.Geom.Point;

  constructor(scene: Phaser.Scene, config: any = {}) {
    super(scene, {...config, active: true });
  }
  
  protected onCreate() {
    const balancerposition = new Phaser.Geom.Point(this.scene.centerX, this.scene.centerY);

    const armIdle = this.armIdle =  this.scene.add.image(0, -150, 'main','balance-arm-idle');
    
    const originalBaskeLeftCenter = this.originalBaskeLeftCenter = new Phaser.Geom.Point(-(armIdle.width - 100) / 2, 0);
    const originalBaskeRightCenter = this.originalBaskeRightCenter = new Phaser.Geom.Point((armIdle.width - 100) / 2, 0);


    const baskeLeft = this.baskeLeft = this.scene.add.image(originalBaskeLeftCenter.x, originalBaskeLeftCenter.y, 'main','balance-basket');
    const baskeRight = this.baskeRight = this.scene.add.image(originalBaskeRightCenter.x, originalBaskeRightCenter.y, 'main','balance-basket');
    baskeLeft.setOrigin(0.5, 0);
    baskeRight.setOrigin(0.5, 0);

    const arm = this.arm = this.scene.add.container(balancerposition.x, balancerposition.y - 150, [ armIdle, baskeLeft, baskeRight ]);
    armIdle.setOrigin(0.5, 0);

    const armBody = this.armBody = this.scene.add.image(balancerposition.x, balancerposition.y, 'main','balance-arm-body');

    const balance = this.scene.add.group([armBody, arm]);
    this.host = balance;
  }

  affterCreate() {
    this.rotateArm(0.3);
  }

  private rotateArm(rad: number) {
    this.arm.setRotation(rad);
    this.baskeLeft.setRotation(-rad);
    this.baskeRight.setRotation(-rad);
  }

  preUpdate() {
    this.rotateArm(this.arm.rotation + 0.01);
  }


}
