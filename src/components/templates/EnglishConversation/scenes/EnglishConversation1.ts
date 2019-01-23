import { EnglishConversation } from './EnglishConversation';

export class EnglishConversation1 extends EnglishConversation {
    public static id = '1';
    public get bubbleData() {
        return {
            message: 'Hi, Ann!',
            bubbleBgLeft: 'bubbleBgLeft',
            bubbleBgMid: 'bubbleBgMid',
            bubbleBgRight: 'bubbleBgRight',
            midWidth: 100,
            x: this.input.manager.canvas.width / 6,
            y: this.input.manager.canvas.height / 4,
        }
    }
    public get backgroundKey(): any {
        return 'backgroundin';
    }
    public get soundKey(): any {
        return 'audio1';
    }
}
