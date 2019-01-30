import * as deepmerge from 'deepmerge';

export class BaseSence extends Phaser.Scene {
    public backgroundCam: Phaser.Cameras.Scene2D.Camera | undefined;
    public bg: Phaser.GameObjects.Graphics | undefined;
    config: any;
    assets: any  = {};

    get width() {
        return this.input.manager.game.canvas.width;
    }

    get height() {
        return this.input.manager.game.canvas.height;
    }

    get centerX() {
        return this.input.manager.game.canvas.width / 2;
    }

    get centerY() {
        return this.input.manager.game.canvas.height / 2;
    }

    public game: any;
    constructor(config: SceneConfig) {
        super(config);
        this.config = config;
    }

    public preload() {
        this.loadAssets();
    }

    public init(opt: any) {
        this.initBg();
        this.config = opt;
        this.combineAssets(this.config.assets);
        this.registerInputs();
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

    protected loadAssets() {
        this.loadImages();
        this.loadSounds();
        this.loadAlas();
    }

    protected loadImages() {
        if( this.assets && this.assets.images ) {
            for( const img of Object.keys(this.assets.images) ) {
                const path = this.assets.images[img];
                this.load.image(img, path);
            }
        }
    }
    protected loadSounds() {
        if (this.config && this.config.assets && this.config.assets.sounds) {
            for (const sound of Object.keys(this.config.assets.sounds)) {
                const path = this.config.assets.sounds[sound];
                this.load.audio(sound, path, {
                    instances: 1,
                    mute: false,
                    volume: 1,
                    rate: 1,
                    detune: 0,
                    seek: 0,
                    loop: false,
                    delay: 0
                });
            }
        }
    }

    protected loadAlas() {
        if( this.assets && this.assets.atlas ) {
            for( const key of Object.keys(this.assets.atlas) ) {
                const img = this.assets.atlas[key].img;
                const json = this.assets.atlas[key].json;

                this.load.atlas(key, img, json);
            }
        }
    }

    private registerInputs() {
        this.input.on('dragstart', this.onDragStart, this);
        this.input.on('drag', this.onDrag, this);
        this.input.on('dragenter', this.onDragenter, this);
        this.input.on('dragleave', this.onDragleave, this);
        this.input.on('dragend', this.onDragend, this);
        this.input.on('drop', this.onDrop, this);
    }

    private onDragStart(pointer: any, gameObject: any) {
        this.children.bringToTop(gameObject);
    }

    private onDrag(pointer: any, gameObject: Phaser.GameObjects.GameObject, dragX: any, dragY: any) {
        if( gameObject.data && gameObject.data.get('custom-drag') ) {
            return;
        }
        (<any>gameObject).x = dragX;
        (<any>gameObject).y = dragY;
    }

    private onDragenter(pointer: any, gameObject: any, dropZone: any) {

    }

    private onDragleave(pointer: any, gameObject: any, dropZone: any) {

    }


    private onDragend(pointer: any, gameObject: { x: any; input: { dragStartX: any; dragStartY: any; }; y: any; }, dropped: boolean) {
        if( (<any>gameObject).data && (<any>gameObject).data.get('custom-drag') ) {
            return;
        }
        if (!dropped) {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }
    }

    private onDrop(pointer: any, gameObject: any, dropZone: any) {

    }

    protected combineAssets(assets: any) {
        assets = assets || {};
        this.assets = deepmerge.default(this.assets, assets);
    }

    use(...Elements:  any[]) {
        for( const El of Elements ) {
            this.combineAssets(El.assets);
        }
    }

}
