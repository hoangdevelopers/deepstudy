import { EnglishConversation } from './EnglishConversation';

export class EnglishConversation2 extends EnglishConversation {
    static id = '2';
    public get bubbleData() {
        return {
            message: 'Hi, Brian!',
            bubbleBgLeft: 'bubbleBgLeft',
            bubbleBgMid: 'bubbleBgMid',
            bubbleBgRight: 'bubbleBgRight',
            midWidth: 100,
            x: this.input.manager.canvas.width * 4 / 6,
            y: this.input.manager.canvas.height / 4,
        }
    }
    public get backgroundKey(): any {
        return 'backgroundin';
    }
    public get soundKey(): any {
        return 'audio2';
    }
}
