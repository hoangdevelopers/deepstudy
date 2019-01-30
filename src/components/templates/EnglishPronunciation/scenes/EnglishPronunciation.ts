import { Scene } from '@/modules/player/states/Sence';
import { Button } from '@/modules/player/elements/button/button';
import { Karaoke } from '../elements/karaoke';
declare var video_t: any;
declare var HOST: any;
export interface IEnglishPronunciationData {
}
export class EnglishPronunciation extends Scene {
    public static id = '1';
    public static data: IEnglishPronunciationData;
    public recordBtn!: Button;
    public playBtn!: Button;
    public chooseCharacter1Btn!: Button;
    public chooseCharacter2Btn!: Button;
    video: any;
    public init(config: any) {
        super.init(config);
    }

    public create() {


        this.createBackground();
        this.createRecordButton();
        this.createPlayBtn();
        this.createChooseCharacterBtn();
        // if (this.config.options.chooseCharacter) {
        //     this.showChooseCharacter();
        //     if (this.config.options.characterActiveId == 1) {
        //         this.chooseCharacter1Btn.setBtnActive();
        //         this.chooseCharacter2Btn.setBtnDeActive();
        //     } else {
        //         this.chooseCharacter2Btn.setBtnActive();
        //         this.chooseCharacter1Btn.setBtnDeActive();
        //     }
        // }
        // if (this.config.options.playAudio) {
        //     this.playAudio();
        // }
        this.initVideo();
        this.initKaraoke();

    }
    private initVideo() {
        this.video = new video_t(this, 'video-1', 400, 300, 'video-1', HOST + '/assets/SAMPLE-1-Phonics/Video/L1_Week01_1.apple.mp4', 640, 400, false, true);
        this.video.setScale(520/this.video.width, 410/this.video.height);
        this.video.x = this.video.width * this.video.scaleX / 2 + 145;
        this.video.y = this.video.height * this.video.scaleY / 2 + 335;
    }
    private initKaraoke() {
        const karaoke = new Karaoke(this, {
            items: [{
                type: 'IMG',
                value: 'apple',
                x: 700,
                y: 400,
                width: 300,
                height: 250
            }, {
                type: 'TEXT',
                value: 'Aa',
                x: 600,
                y: 550,
                style: {font: 'bold 36px Arial', fill: '0x000000'}
            }, {
                type: 'TEXT',
                value: 'Aa',
                x: 680,
                y: 550,
                style: {font: 'bold 36px Arial', fill: '0x000000'}
            }, {
                type: 'TEXT',
                value: 'apple',
                x: 760,
                y: 550,
                style: {font: 'bold 36px Arial', fill: '0x000000'}
            }]
        });

        setTimeout(() => {
            karaoke.play();
        }, 1000)
        setTimeout(() => {
            karaoke.play();
        }, 10000)
    }
    update() {
        super.update();
        this.video.update()

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
        const bg = this.add.sprite(this.input.manager.canvas.width / 2, this.input.manager.canvas.height / 2, 'bg');
        bg.setScale(this.input.manager.canvas.width / bg.width, this.input.manager.canvas.height / bg.height);
    }
    public get soundKey(): any {
        throw new Error('Not implement yet');
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
