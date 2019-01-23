import { Scene } from '@/modules/player/states/Sence';
import { SimpleDragSprite } from '@/modules/player/elements/SimpleDragSprite/SimpleDragSprite';
import { BubbleMessageSprite } from '@/modules/player/elements/bubble-message/bubbleMessageSprite';

export interface IEnglishConversationData {
}
export class EnglishConversation extends Scene {
    public static id = '';
    public static data: IEnglishConversationData;
    public bubble!: BubbleMessageSprite;
    init(config: any) {
        super.init(config);
        console.log(config)
    }

    create() {
        this.createBackground();
        this.createBubble();
    }
    createBackground() {
        const bg = this.add.sprite(this.input.manager.canvas.width / 2, this.input.manager.canvas.height / 2, 'background');
        // bg.width = this.input.manager.canvas.width;
        bg.setScale(this.input.manager.canvas.width / bg.width, this.input.manager.canvas.height / bg.height);
    }
    createBubble() {
        const bubble = new BubbleMessageSprite(this, {
            message: 'Hi, Ann',
            bubbleBgLeft: 'bubbleBgLeft',
            bubbleBgMid: 'bubbleBgMid',
            bubbleBgRight: 'bubbleBgRight',
            midWidth: 100,
            x: this.input.manager.canvas.width / 6,
            y: this.input.manager.canvas.height / 4,
        });
        // const drag1 = this.add.sprite(170, 100, 'background');
        // drag1.setInteractive();
        // this.input.setDraggable(drag1, 1);

        // const drop1 = new SimpleDragSprite(this, {
        //     x: 0,
        //     dragSprite: 'puppy',
        //     dropActiveBg: 'box-crumpled',
        //     dropbg: 'box-flat',
        //     dropActiveSprite: 'puppy',
        //     target: drag1
        // });

        // const arrow1 = this.add.image(200, 230, 'arrow');
        // const blinkingArrow2 = this.tweens.add({ targets: arrow1, repeat: -1, alpha: 0});

        // drop1.on('SimpleDragSpriteDrop', () => {
        //     blinkingArrow2.stop();
        //     arrow1.setVisible(false);
        // });
    }

    createDrag2() {
        const drag2 = this.add.image(470, 100, 'buffalo');
        drag2.setInteractive();
        this.input.setDraggable(drag2, 1);

        const arrow2 = this.add.image(500, 230, 'arrow');

        const drop2 = new SimpleDragSprite(this, {
            x: 300,
            dragSprite: 'buffalo',
            dropActiveBg: 'box-hard-crumpled',
            dropbg: 'box-flat',
            dropActiveSprite: 'buffalo',
            target: drag2
        });
        const blinkingArrow2 = this.tweens.add({ targets: arrow2, repeat: -1, alpha: 0});
        drop2.on('SimpleDragSpriteDrop', () => {
            blinkingArrow2.stop();
            arrow2.setVisible(false);
        });
    }
}
