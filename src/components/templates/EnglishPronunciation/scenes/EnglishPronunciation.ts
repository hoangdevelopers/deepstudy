import { Scene } from "@/modules/player/states/Sence";
import { Button } from '@/modules/player/elements/button/button';

export class EnglishPronunciationScene extends Scene {
  static id = "EnglishPronunciationScene";
  television!: Phaser.GameObjects.Group;
  ctx: any;
  video!: HTMLVideoElement;
  texture!: Phaser.Textures.Texture;
  phonic!: Phaser.GameObjects.Image;
  recordBtn: any;

  init(config: any) {
    super.init(config);
  }

  create() {
    const telebg = this.add.image(
      this.centerX - 150,
      this.centerY,
      "television"
    );
    telebg.setScale(0.7);

    var texture = (this.texture = this.textures.createCanvas(
      "aatest",
      400,
      400
    ));

    this.ctx = texture.context;

    const video = (this.video = document.createElement("video"));
    video.src = "/assets/SAMPLE 1 Phonics/Mouth Video/L1_Week01_1.apple.mp4";
    video.preload = "preload";

    const teleImg = this.add.image(
      this.centerX + 10 - 160,
      this.centerY + 80,
      "aatest"
    );
    teleImg.setScale(0.7);
    this.television = this.add.group([telebg, teleImg]);

    this.phonic = this.add.image(this.centerX + 300, this.centerY, "apple");
    this.phonic.setScale(0.7);
    this.createButton();
  }

  update() {
    this.ctx.drawImage(this.video, 0, 0);
  }

  drawVideo() {}

  createButton() {
    this.recordBtn = new Button(
      this,
      (active: any) => {
        if (active) {
          this.record();
        } else {
          this.stopRecord();
        }
      },
      {
        background: "btnRecord",
        backgroundPress: "btnRecordPress",
        backgroundActive: "btnRecordActive",
        x: this.input.manager.canvas.width - 220,
        y: this.input.manager.canvas.height - 120
      }
    );
    this.recordBtn.hidden();
  }

  record() {
    this.config.options.adapter.record.bind(this.config.options.adapter)();
  }
  stopRecord() {
    this.config.options.adapter.stopRecord.bind(this.config.options.adapter)();
  }
}
