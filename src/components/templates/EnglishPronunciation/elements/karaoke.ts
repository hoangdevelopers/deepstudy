import { BaseElment } from '@/modules/player/framework/BaseElement';
interface Item {
    type: 'IMG'|'TEXT';
    value: string;
    x: number;
    y: number;
    width?: number;
    hieght?: number;
    style?: any;
}
export interface IKaraokeConfig {
    items: Item[]
}
export class Karaoke extends BaseElment {
    constructor(scene: Phaser.Scene, config: any = {}) {
        super(scene, {...config, active: true });
    }
    onCreate() {
        for(const item of this.config.items) {
            if (item.type == 'IMG') {
                const img = this.scene.add.image(item.x, item.y, item.value);
                img.setScale(item.width / img.width, item.height / img.height);

            } else if (item.type == 'TEXT') {
                this.scene.add.text(item.x, item.y, item.value, item.style);
            }
        }
    }
}