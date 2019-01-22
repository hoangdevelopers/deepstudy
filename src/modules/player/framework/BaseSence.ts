
export class BaseSence extends Phaser.Scene {
    public backgroundCam: Phaser.Cameras.Scene2D.Camera | undefined;
    public bg: Phaser.GameObjects.Graphics | undefined;
    config: any;

    constructor(config: SceneConfig) {
        super(config);
    }
    
    public preload() {
        this.loadAssets();
    }
    
    public init(opt: any) {
        this.initBg();
        this.config = opt;
        this.registerInputs();
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

    protected loadAssets() {
        this.loadImages();
        this.loadSpriteSheets();
    }

    protected loadImages() {
        if( this.config && this.config.assets && this.config.assets.images ) {
            for( const img of Object.keys(this.config.assets.images) ) {
                const path = this.config.assets.images[img];
                this.load.image(img, path);
            }
        }
    }

    protected loadSpriteSheets() {
        if( this.config && this.config.assets && this.config.assets.spriteSheets ) {
            for( const key of Object.keys(this.config.assets.spriteSheets) ) {
                const img = this.config.assets.spriteSheets[key].img;
                const json = this.config.assets.spriteSheets[key].json;

                this.load.atlas(key, img, json);
            }
        }
    }

    private registerInputs() {
        this.input.on('dragstart', this.onDragStart , this);
        this.input.on('drag', this.onDrag, this);
        this.input.on('dragenter', this.onDragenter, this);
        this.input.on('dragleave', this.onDragleave, this);
        this.input.on('dragend', this.onDragend, this);
        this.input.on('drop', this.onDrop, this);
    }

    private onDragStart(pointer: any, gameObject: any) {
        this.children.bringToTop(gameObject);
    }

    private onDrag(pointer: any, gameObject: { x: any; y: any; }, dragX: any, dragY: any) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    }

    private onDragenter(pointer: any, gameObject: any, dropZone: any) {
      
    }

    private onDragleave(pointer: any, gameObject: any, dropZone: any) {

    }

    
    private onDragend(pointer: any, gameObject: { x: any; input: { dragStartX: any; dragStartY: any; }; y: any; }, dropped: boolean) {
        if (!dropped)
        {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }
    }

    private onDrop(pointer: any, gameObject: any, dropZone: any) {

    }

}
