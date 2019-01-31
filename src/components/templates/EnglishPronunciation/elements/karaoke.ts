import { BaseElment } from '@/modules/player/framework/BaseElement';
import { TimelineMax, Linear, TweenMax } from 'gsap';
var DELAY_TIME = 0.1;
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
    timeline!: TimelineMax;
    elements!: any[];
    
    constructor(scene: Phaser.Scene, config: any = {}) {
        super(scene, { ...config, active: true });
    }

    onUpdate() {

    }

    onRepeat() {

    }

    onComplete() {

    }

    private initTimeline() {
        this.timeline = new TimelineMax({
            delay: 0,
            onUpdate: this.onUpdate.bind(this),
            onRepeat: this.onRepeat.bind(this),
            onComplete: this.onComplete.bind(this)
        });

        for (let el of this.elements) {
            const tm = new TweenMax(el, 1, {
                bezier: {
                    type: "soft",
                    values: [{ scaleX: 1.1, scaleY: 1.1 }, { scaleX: 1 / 1.1, scaleY: 1 / 1.1 }],
                    autoRotate: true
                },
                ease: Linear.easeNone
            });
            this.timeline.add(tm, el.delay);
        }
        this.timeline.pause()
    }

    renderItem() {

    }

    onCreate() {
        this.elements = [];
        let width = 0; 
        for (const item of this.config.items) {
            if (item.type == 'IMG') {
                const img = this.scene.add.image(this.config.x + width, this.config.y, item.value);
                img.setScale(item.width / img.width, item.height / img.height);
                width += img.width + 10;

                (<any>img).delay = item.delay;
                this.elements.push(img);

            } else {
                for( const part of item.parts) {
                    console.log(part.style || item.style || this.config.style);
                    const text = this.scene.add.text(this.config.x + width, this.config.y, part.text, part.style || item.style || this.config.style);
                    (<any>text).delay = item.delay;
                    width += text.width;
                    this.elements.push(text);
                }
                width += 10;
            }
        }
        this.initTimeline();
    }

    play() {
        this.timeline.play();
    }

    updateCurrent(time: number) {
        if (Math.abs(time) - this.timeline.time() > DELAY_TIME) {
            console.log(time, this.timeline.time())
            this.timeline.seek(time);
        }
    }

}