import { BaseElment, BaseElementConfig } from '../../framework/BaseElement';

export interface SimpleDragSpriteConfig extends BaseElementConfig {
    message: string;
    bubbleBgLeft: string;
    bubbleBgMid: string;
    bubbleBgRight: string;
    midWidth: number;
    x: number;
    y: number;
}

export class BubbleMessageSprite extends BaseElment {
    graphics!: Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene, config?: SimpleDragSpriteConfig) {
        super(scene, config);
    }

    onCreate() {
        const bubbleBgLeft = this.scene.add.image(0, 0, this.config.bubbleBgLeft);
        bubbleBgLeft.x = 0;
        bubbleBgLeft.y = bubbleBgLeft.height / 2;
        const bubbleBgMid = this.scene.add.image(0, 0, this.config.bubbleBgMid);
        bubbleBgMid.scaleX = (this.config.midWidth + 10) / bubbleBgMid.width;
        bubbleBgMid.x = bubbleBgLeft.x + bubbleBgLeft.width / 2 + this.config.midWidth / 2;
        bubbleBgMid.y = bubbleBgLeft.height / 2;
        const bubbleBgRight = this.scene.add.image(0, 0, this.config.bubbleBgRight);
        bubbleBgRight.x = bubbleBgMid.x + this.config.midWidth / 2 + bubbleBgRight.width / 2;
        bubbleBgRight.y = bubbleBgLeft.height / 2;
        const msg = this.scene.add.text(0, 0, this.config.message, {font: 'bold 30px Arial', fill: '0x000000'});
        msg.y = bubbleBgLeft.height / 4;
        this.host.add(bubbleBgLeft);
        this.host.add(bubbleBgMid);
        this.host.add(bubbleBgRight);
        this.host.add(msg);
    }

    affterCreate() {
    }

}