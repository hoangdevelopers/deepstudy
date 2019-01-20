
export class BaseSence extends Phaser.Scene {
    public backgroundCam: Phaser.Cameras.Scene2D.Camera | undefined;
    public bg: Phaser.GameObjects.Graphics | undefined;

    constructor(config: SceneConfig) {
        super(config);
    }

    public preload() {
    }

    public init() {
        this.initBg();
    }

    public create() {

    }

    public update() {
    }

    private initBg() {
        this.bg = this.add.graphics();
        this.bg.fillStyle(0xffffff, 1);
        this.bg.fillRect(0, 0, this.input.manager.canvas.width, this.input.manager.canvas.height);
    }
}
