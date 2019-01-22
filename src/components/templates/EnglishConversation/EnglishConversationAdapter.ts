import { playerAdapter } from '@/modules/player/framework/PlayerAdapter';
import { EnglishConversation1 } from './scenes/EnglishConversation1';
import { EnglishConversation4 } from './scenes/EnglishConversation4';
import { EnglishConversation2 } from './scenes/EnglishConversation2';
import { EnglishConversation3 } from './scenes/EnglishConversation3';

export class EnglishConversationAdapter extends playerAdapter {
    constructor(config?: any) {
        super(config);
        this.scenes = [
            EnglishConversation1,
            EnglishConversation2,
            EnglishConversation3,
            EnglishConversation4,
        ];
        EnglishConversation1.data = { backgroundKey: 'backgroundin'};
        EnglishConversation2.data = { backgroundKey: 'backgroundin'};
        EnglishConversation3.data = { backgroundKey: 'backgroundin'};
        EnglishConversation4.data = { backgroundKey: 'backgroundin'};
    }

    public start() {
        this.startScene1();
    }

    public startScene1() {
        this.player.scene.start(EnglishConversation1.id, {
            assets: {
                images: {
                    background: 'http://localhost:8080/assets/SAMPLE-2-Dialog/Graphic/image_dialog_background.png',
                    bubbleBgLeft: 'http://localhost:8080/assets/SAMPLE-2-Dialog/Graphic/bubble-left.png',
                    bubbleBgMid: 'http://localhost:8080/assets/SAMPLE-2-Dialog/Graphic/bubble-mid.png',
                    bubbleBgRight: 'http://localhost:8080/assets/SAMPLE-2-Dialog/Graphic/bubble-right.png',
                    },
                sounds: {},
                spriteSheet: {
                },
            },
        });
    }

    public startScene2() {
        this.player.scene.start(EnglishConversation2.id, {
            assets: {
                images: {
                    background:
                        'http://localhost:8080/assets/SAMPLE-2-Dialog/Graphic/image_dialog_background2.png',
                },
                sounds: {},
                spriteSheet: {
                },
            },
        });
    }
}
