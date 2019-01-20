
export class BaseSence extends Phaser.Scene {
    backgroundCam: Phaser.Cameras.Scene2D.Camera | undefined;
    bg: Phaser.GameObjects.Graphics | undefined;

    constructor(config: SceneConfig) {
        super(config);
    }
    
    preload() {
    }

    init() {
        this.initBg();
    }
    
    create() {

    }

    update() {
    }

    private initBg() {
        this.bg = this.add.graphics();
        this.bg.fillStyle(0xffffff, 1);
        this.bg.fillRect(0, 0, this.input.manager.canvas.width, this.input.manager.canvas.height);
    }
}
