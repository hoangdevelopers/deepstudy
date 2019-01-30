import { BaseElment } from '@/modules/player/framework/BaseElement';
interface Item {
    type: 'IMG' | 'TEXT';
    value: string;
    x: number;
    y: number;
    width?: number;
    hieght?: number;
    style?: any;
}
export interface IKaraokeConfig {
    items: Item[];
}
export class Karaoke extends BaseElment {
    timeline!: Phaser.Tweens.Timeline;
    elements!: any[];
    constructor(scene: Phaser.Scene, config: any = {}) {
        super(scene, { ...config, active: true });
    }
    private initTimeline() {
        this.timeline = this.scene.tweens.createTimeline({});
        for (let el of this.elements) {
            const w = el.width, h = el.height;
            this.timeline.add({
                targets: el,
                scaleX: 1.1,
                scaleY: 1.1,
                ease: 'Power1',
                duration: 250,
                delay: el.myConfig.delay || 0,
            });
            this.timeline.add({
                targets: el,
                scaleX: w / el.width,
                scaleY: h / el.height,
                ease: 'Power1',
                duration: 250,
                delay: el.myConfig.delay || 0,
            });
        }
    }
    onCreate() {
        this.elements = [];
        for (const item of this.config.items) {
            if (item.type == 'IMG') {
                const img = this.scene.add.image(item.x, item.y, item.value);
                img.setScale(item.width / img.width, item.height / img.height);
                (<any>img).myConfig = item;
                this.elements.push(img);

            } else if (item.type == 'TEXT') {
                const text = this.scene.add.text(item.x, item.y, item.value, item.style);
                (<any>text).myConfig = item;
                this.elements.push(text);
            }
        }
        this.initTimeline();
    }
    play() {
        this.timeline = this.scene.tweens.createTimeline({});
        for (let el of this.elements) {
            const w = el.width, h = el.height;
            this.timeline.add({
                targets: el,
                scaleX: 1.1,
                scaleY: 1.1,
                ease: 'Power1',
                duration: 250,
                delay: el.myConfig.delay || 0,
            });
            this.timeline.add({
                targets: el,
                scaleX: w / el.width,
                scaleY: h / el.height,
                ease: 'Power1',
                duration: 250,
                delay: el.myConfig.delay || 0,
            });
        }
        this.timeline.play();
    }

}