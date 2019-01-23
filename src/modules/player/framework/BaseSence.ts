import { BaseElment } from './BaseElement';

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

    private onDrag(pointer: any, gameObject: { x: any; y: any; }, dragX: any, dragY: any) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    }

    private onDragenter(pointer: any, gameObject: any, dropZone: any) {

    }

    private onDragleave(pointer: any, gameObject: any, dropZone: any) {

    }


    private onDragend(pointer: any, gameObject: { x: any; input: { dragStartX: any; dragStartY: any; }; y: any; }, dropped: boolean) {
        if (!dropped) {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }
    }

    private onDrop(pointer: any, gameObject: any, dropZone: any) {

    }

    protected combineAssets(assets: any) {
        this.assets = deepmerge.default(this.assets, assets);
    }

    use(...Elements:  any[]) {
        for( const El of Elements ) {
            this.combineAssets(El.assets);
        }
    }

}
