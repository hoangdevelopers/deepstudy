import { BaseElment, BaseElementConfig } from '../../framework/BaseElement';

export interface DragConfig extends BaseElementConfig {
    dropbg: Phaser.GameObjects.Image;
    dragSprite: Phaser.GameObjects.Image;
    dropActiveBg: Phaser.GameObjects.Image;
    zone: Phaser.GameObjects.Zone;
    target?: any;
}

export class Drag extends BaseElment {
    graphics!: Phaser.GameObjects.Graphics;
    config!: DragConfig;
    dragtarget: any;
    done!: boolean;

    constructor(scene: Phaser.Scene, config?: DragConfig) {
        super(scene, config);
        this.dragtarget = this.config.target;
    }

    onCreate() {
        this.createDropSprite();
    }

    affterCreate() {
        this.scene.input.on('drop', this.onDrop, this);
    }

    // private createDropZone() {
    //     //  A drop zone
    //     this.zone = this.scene.add.zone(0, 0, 320, 200).setRectangleDropZone(300, 200);
    //     this.host.add(this.zone);

    //     this.createDropSprite();
    // }

    private createDropSprite() {
        // this.dropbg = this.scene.add.image(this.zone.x, this.zone.y, this.config.dropbg);
        // this.host.add(this.dropbg);

        // this.dropbgActive = this.scene.add.image(this.zone.x, this.zone.y, this.config.dropActiveBg);
        // this.host.add(this.dropbgActive);

        // this.dropSpriteActive = this.scene.add.image(this.zone.x, this.zone.y - 80, this.config.dropActiveSprite);
        // this.host.add(this.dropSpriteActive);

        this.config.dropActiveBg.setVisible(false);
    }

    setDragtarget(target: any) {
        this.dragtarget = target;
    }

    onDrop(pointer: any, gameObject: any, dropZone: any) {
        if (gameObject != this.dragtarget && dropZone != this.config.zone) {
            return;
        }
        this.done = true;
        this.emit('DragDrop');
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;

        gameObject.input.enabled = false;
        gameObject.setVisible(false);

        this.config.dropbg.setVisible(false);
        this.config.dropActiveBg.setVisible(true);
    }
}