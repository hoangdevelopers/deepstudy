import { Scene } from '@/modules/player/states/Sence';
import { BubbleMessageSprite } from '@/modules/player/elements/bubble-message/bubbleMessageSprite';
import { Button } from '@/modules/player/elements/button/button';

export interface IEnglishConversationData {
}
export class EnglishConversation extends Scene {
    public static id = '';
    public static data: IEnglishConversationData;
    public bubble!: BubbleMessageSprite;
    public recordBtn!: Button;
    public playBtn!: Button;
    public chooseCharacter1Btn!: Button;
    public chooseCharacter2Btn!: Button;

    public init(config: any) {
        super.init(config);
    }

    public create() {
        this.createBackground();
        this.createBubble();
        this.bubble.shake();
        this.createRecordButton();
        this.createPlayBtn();
        this.createChooseCharacterBtn();
        if (this.config.options.chooseCharacter) {
            this.showChooseCharacter();
            if (this.config.options.characterActiveId == 1) {
                this.chooseCharacter1Btn.setBtnActive();
                this.chooseCharacter2Btn.setBtnDeActive();
            } else {
                this.chooseCharacter2Btn.setBtnActive();
                this.chooseCharacter1Btn.setBtnDeActive();
            }
        }
        if (this.config.options.playAudio) {
            this.playAudio();
        }
    }
    public createRecordButton() {
        this.recordBtn = new Button(this, (active: any) => {
            if (active) {
                this.record();
            } else {
                this.stopRecord();
            }
        }, {
                background: 'btnRecord',
                backgroundPress: 'btnRecordPress',
                backgroundActive: 'btnRecordActive',
                x: this.input.manager.canvas.width - 220,
                y: this.input.manager.canvas.height - 120,
            });
        this.recordBtn.hidden();
    }
    record() {
        this.config.options.adapter.record.bind(this.config.options.adapter)();
    }
    stopRecord() {
        this.config.options.adapter.stopRecord.bind(this.config.options.adapter)();
    }
    public playAudio() {
        const music = this.sound.add(this.soundKey);
        music.play();
    }
    public showRecord() {
        if (!this.recordBtn) {
            this.createRecordButton();
        }
        this.recordBtn.visible();
        this.recordBtn.blink();
    }
    public createBackground() {
        const bg = this.add.sprite(this.input.manager.canvas.width / 2, this.input.manager.canvas.height / 2, this.backgroundKey);
        bg.setScale(this.input.manager.canvas.width / bg.width, this.input.manager.canvas.height / bg.height);
    }
    public get soundKey(): any {
        throw new Error('Not implement yet');
    }
    public get backgroundKey(): any {
        throw new Error('Not implement yet');
    }
    public get bubbleData(): any {
        throw new Error('Not implement yet');
        // return {
        //     message: 'Hi, Ann',
        //     bubbleBgLeft: 'bubbleBgLeft',
        //     bubbleBgMid: 'bubbleBgMid',
        //     bubbleBgRight: 'bubbleBgRight',
        //     midWidth: 100,
        //     x: this.input.manager.canvas.width / 6,
        //     y: this.input.manager.canvas.height / 4,
        // }
    }
    public createBubble() {
        this.bubble = new BubbleMessageSprite(this, this.bubbleData);
    }
    public playMyVoid() {
        this.config.options.adapter.playMyVoid();
    }
    public stopMyVoid() {

    }
    showPlayBtn() {
        this.playBtn.visible();
        this.playBtn.blink();
    }
    public createPlayBtn() {
        this.playBtn = new Button(this, (active: any) => {
            if (active) {
                this.playMyVoid();
            } else {
                this.stopMyVoid();
            }
        }, {
                background: 'btnPlay',
                backgroundPress: 'btnPlayPress',
                backgroundActive: 'btnPlayActive',
                x: this.input.manager.canvas.width - 120,
                y: this.input.manager.canvas.height - 120,
            });
        this.playBtn.hidden();
    }
    public createChooseCharacterBtn() {
        this.chooseCharacter1Btn = new Button(this, (active: any) => {
            this.chooseCharacter(1);
            this.chooseCharacter1Btn.setBtnActive();
            this.chooseCharacter2Btn.setBtnDeActive();
        }, {
                background: 'btnCharacter1',
                backgroundPress: 'btnCharacter1Active',
                backgroundActive: 'btnCharacter1Active',
                x: 100,
                y: this.input.manager.canvas.height - 120,
            });
        this.chooseCharacter1Btn.hidden();

        this.chooseCharacter2Btn = new Button(this, (active: any) => {
            this.chooseCharacter(2);
            this.chooseCharacter2Btn.setBtnActive();
            this.chooseCharacter1Btn.setBtnDeActive();
        }, {
                background: 'btnCharacter2',
                backgroundPress: 'btnCharacter2Active',
                backgroundActive: 'btnCharacter2Active',
                x: 200,
                y: this.input.manager.canvas.height - 120,
            });
        this.chooseCharacter2Btn.hidden();
    }
    chooseCharacter(id: number) {
        this.config.options.adapter.chooseCharacter(id);
    }
    showChooseCharacter() {
        this.chooseCharacter1Btn.visible();
        this.chooseCharacter1Btn.blink();
        this.chooseCharacter2Btn.visible();
        this.chooseCharacter2Btn.blink();
    }
}
