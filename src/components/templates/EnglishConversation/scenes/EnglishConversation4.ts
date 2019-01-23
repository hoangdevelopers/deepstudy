import { EnglishConversation } from './EnglishConversation';

export class EnglishConversation4 extends EnglishConversation {
    static id = '4';
    public get bubbleData() {
        return {
            message: 'See you, Brien',
            bubbleBgLeft: 'bubbleBgLeft',
            bubbleBgMid: 'bubbleBgMid',
            bubbleBgRight: 'bubbleBgRight',
            midWidth: 160,
            x: this.input.manager.canvas.width *4 / 6,
            y: this.input.manager.canvas.height / 4,
        }
    }
    public get backgroundKey(): any {
        return 'backgroundout';
    }
    public get soundKey(): any {
        return 'audio4';
    }
}
