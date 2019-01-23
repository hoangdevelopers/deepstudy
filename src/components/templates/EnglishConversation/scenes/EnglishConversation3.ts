import { EnglishConversation } from './EnglishConversation';

export class EnglishConversation3 extends EnglishConversation {
    static id = '3';
    public get bubbleData() {
        return {
            message: 'Bye, Ann!',
            bubbleBgLeft: 'bubbleBgLeft',
            bubbleBgMid: 'bubbleBgMid',
            bubbleBgRight: 'bubbleBgRight',
            midWidth: 100,
            x: this.input.manager.canvas.width / 6,
            y: this.input.manager.canvas.height / 4,
        }
    }
    public get backgroundKey(): any {
        return 'backgroundout';
    }
    public get soundKey(): any {
        return 'audio3';
    }
}
