import { BaseElment, BaseElementConfig } from '../../framework/BaseElement';

export interface SimpleDragSpriteConfig  extends BaseElementConfig {
    dropbg: string;
    dragSprite: string;
    dropActiveBg: string;
    dropActiveSprite: string;
    target?: any;
}

export class SimpleDragSprite extends BaseElment {
    graphics!: Phaser.GameObjects.Graphics;
    zone!: Phaser.GameObjects.Zone;
    dropbg!: Phaser.GameObjects.Image;
    dropSprite!: Phaser.GameObjects.Image;
    dropbgActive!: Phaser.GameObjects.Image;
    dropSpriteActive!: Phaser.GameObjects.Image;
    config!: SimpleDragSpriteConfig;
    dragtarget: any;

    constructor(scene: Phaser.Scene, config?: SimpleDragSpriteConfig) {
        super(scene, config);   
        this.dragtarget = this.config.target;
    }

    onCreate() {
        this.createDropZone();
    }

    affterCreate() {
        this.scene.input.on('drop', this.onDrop, this);
    }

    private createDropZone() {
        //  A drop zone
        this.zone = this.scene.add.zone(200, 400, 320, 200).setRectangleDropZone(300, 200);
        this.host.add(this.zone);

        this.createDropSprite();
    }

    private createDropSprite() {
        this.dropbg = this.scene.add.image(this.zone.x, this.zone.y, this.config.dropbg);
        this.host.add(this.dropbg);

        this.dropbgActive = this.scene.add.image(this.zone.x, this.zone.y, this.config.dropActiveBg);
        this.host.add(this.dropbgActive);

        this.dropSpriteActive = this.scene.add.image(this.zone.x, this.zone.y - 80, this.config.dropActiveSprite);
        this.host.add(this.dropSpriteActive);

        this.dropSpriteActive.setVisible(false);
        this.dropbgActive.setVisible(false);
    }

    setDragtarget(target: any) {
        this.dragtarget = target;
    }

    onDrop(pointer: any, gameObject: any, dropZone: any) {
        if( gameObject != this.dragtarget && dropZone != this.zone ) {
            return;
        }
        this.emit('SimpleDragSpriteDrop');
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;

        gameObject.input.enabled = false;
        gameObject.setVisible(false);
        
        this.dropbg.setVisible(false);
        this.dropbgActive.setVisible(true);
        this.dropSpriteActive.setVisible(true);
    }
}