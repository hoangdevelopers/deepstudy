
export class BaseSence extends Phaser.Scene {
    public id: any;
    public backgroundCam: Phaser.Cameras.Scene2D.Camera | undefined;
    public bg: Phaser.GameObjects.Graphics | undefined;
    config: any;

    constructor(config: SceneConfig) {
        super(config);
        this.id = config.key;
    }

    public preload() {
        this.loadImages();
    }

    public init(opt: any) {
        this.initBg();
        this.config = opt;
    }

    public create() {

    }

    public update() {
    }

    public initBg() {
        this.bg = this.add.graphics();
        this.bg.fillStyle(0xffffff, 1);
        this.bg.fillRect(0, 0, this.input.manager.canvas.width, this.input.manager.canvas.height);
    }

    private loadImages() {
        if (this.config!.assets!.images) {
            for (const img of Object.keys(this.config.assets.images)) {
                const path = this.config.assets.images[img];
                this.load.image(img, path);
            }
        }
    }
}
