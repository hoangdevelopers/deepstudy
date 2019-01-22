import { Scene } from '@/modules/player/states/Sence';
import { SimpleDragSprite } from '@/modules/player/elements/SimpleDragSprite/SimpleDragSprite';

export class SimpleDragAndShow extends Scene {
    static id = 'SimpleDragAndShow';

    init(config: any) {
        super.init(config);
    }

    create() {
        this.createDrag1();
        this.createDrag2();
    }

    createDrag1() {
        const drag1 = this.add.sprite(170, 100, 'puppy');
        drag1.setInteractive();
        this.input.setDraggable(drag1, 1);
        
        const drop1 = new SimpleDragSprite(this, {
            x: 0,
            dragSprite: 'puppy',
            dropActiveBg: 'box-crumpled',
            dropbg: 'box-flat',
            dropActiveSprite: 'puppy',
            target: drag1
        });

        const arrow1 = this.add.image(200, 230, 'arrow');
        const blinkingArrow2 = this.tweens.add({ targets: arrow1, repeat: -1, alpha: 0});

        drop1.on('SimpleDragSpriteDrop', () => {
            blinkingArrow2.stop();
            arrow1.setVisible(false);
        });
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
