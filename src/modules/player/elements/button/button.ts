import { BaseElment, BaseElementConfig } from '../../framework/BaseElement';

export interface IButtonConfig extends BaseElementConfig {
    background: string;
    backgroundPress: string;
    backgroundActive: string;
    x: number;
    y: number;
}

export class Button extends BaseElment {
    graphics!: Phaser.GameObjects.Graphics;
    buttonBgActive!: Phaser.GameObjects.Image;
    buttonBg!: Phaser.GameObjects.Image;
    active: boolean = false;
    constructor(scene: Phaser.Scene, public callback: Function, config?: IButtonConfig) {
        super(scene, config);
    }
    public setBtnActive() {
        this.active = true;
        this.buttonBg.alpha = 0;
    }
    public setBtnDeActive() {
        this.active = false;
        this.buttonBg.alpha = 1;
    }
    onCreate() {
        this.buttonBgActive = this.scene.add.image(0, 0, this.config.backgroundPress);
        this.buttonBgActive.x = 0;
        this.buttonBgActive.y = this.buttonBgActive.height / 2;
        this.buttonBg = this.scene.add.image(0, 0, this.config.background);
        this.buttonBg.x = 0;
        this.buttonBg.y = this.buttonBg.height / 2;
        //
        // button.onInputOut.add(out, this);
        // button.onInputUp.add(up, this);
        //
        this.assignEvent(this.buttonBg);
        this.assignEvent(this.buttonBgActive);

        this.host.add(this.buttonBgActive);
        this.host.add(this.buttonBg);
    }
    assignEvent(obj: Phaser.GameObjects.Image) {
        obj.setInteractive({
            useHandCursor: true
        });
        obj.on('pointerdown', this.onPointerdown.bind(this));
        obj.on('pointerover', this.onPointerover.bind(this));
        obj.on('pointerout', this.onPointerout.bind(this));
        obj.on('pointerup', this.onPointerup.bind(this));
    }
    onPointerdown() {
        this.active = !this.active;
        this.callback(this.active);
        if (this.active) {
            this.buttonBg.alpha = 0;
        } else {
            this.buttonBg.alpha = 1;
        }
        this.buttonBgActive.setScale(1.1);
        this.buttonBg.setScale(1.1);
    }
    onPointerup() {
        this.buttonBgActive.setScale(1);
        this.buttonBg.setScale(1);
    }
    onPointerover() {
        this.buttonBgActive.setScale(1.05);
        this.buttonBg.setScale(1.05);
    }
    onPointerout() {
        this.buttonBgActive.setScale(1);
        this.buttonBg.setScale(1);
    }

    affterCreate() {
    }

}