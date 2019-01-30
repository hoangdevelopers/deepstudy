import { Scene } from "@/modules/player/states/Sence";
import { Button } from '@/modules/player/elements/button/button';
import { Karaoke } from '../elements/karaoke';
declare var video_t: any;
export class EnglishPronunciationScene extends Scene {
    static id = "EnglishPronunciationScene";
    television!: Phaser.GameObjects.Group;
    video!: any;
    phonic!: Phaser.GameObjects.Image;
    recordBtn: any;
    karaoke!: Karaoke;

    init(config: any) {
        super.init(config);
    }

    create() {
        this.createBackground();
        const telebg = this.add.image(
            this.centerX - 150,
            this.centerY,
            "television"
        );
        telebg.setScale(0.7);

        this.video = new video_t(this, 'video-1', 400, 300, 'video-1', '/assets/SAMPLE-1-Phonics/Video/L1_Week01_1.apple.mp4', 640, 400, false, () => {
            this.playeVideoWithAnimation();
        });
        this.video.setScale(460 / this.video.width, 280 / this.video.height);
        this.video.x = this.video.width * this.video.scaleX / 2 + 210;
        this.video.y = this.video.height * this.video.scaleY / 2 + 340;

        this.television = this.add.group([telebg]);

        this.createButton();
        this.initKaraoke();
    }
    private initKaraoke() {
        this.karaoke = new Karaoke(this, {
            items: [{
                type: 'TEXT',
                value: 'Aa',
                x: 600,
                y: 550,
                style: {font: 'bold 36px Arial', fill: '0x000000'},
                delay: 1,
            }, {
                type: 'TEXT',
                value: 'Aa',
                x: 680,
                y: 550,
                style: {font: 'bold 36px Arial', fill: '0x000000'},
                delay: 2,
            }, {
                type: 'TEXT',
                value: 'apple',
                x: 760,
                y: 550,
                style: {font: 'bold 36px Arial', fill: '0x000000'},
                delay: 4,
            }, {
                type: 'IMG',
                value: 'apple',
                x: 700,
                y: 400,
                width: 300,
                height: 250,
                delay: 4,
            }, ]
        });
    }
    update() {
        this.video && this.video.update();
        this.karaoke.updateCurrent(this.video.time());
    }
    playeVideoWithAnimation() {
        this.video.play();
        this.karaoke.play();
    }
    drawVideo() { }

    createButton() {
        this.recordBtn = new Button(
            this,
            (active: any) => {
                if (active) {
                    this.record();
                } else {
                    this.stopRecord();
                }
            },
            {
                background: "btnRecord",
                backgroundPress: "btnRecordPress",
                backgroundActive: "btnRecordActive",
                x: this.input.manager.canvas.width - 220,
                y: this.input.manager.canvas.height - 120
            }
        );
        this.recordBtn.hidden();
    }

    record() {
        this.config.options.adapter.record.bind(this.config.options.adapter)();
    }
    stopRecord() {
        this.config.options.adapter.stopRecord.bind(this.config.options.adapter)();
    }
    public createBackground() {
        const bg = this.add.sprite(this.input.manager.canvas.width / 2, this.input.manager.canvas.height / 2, 'bg');
        bg.setScale(this.input.manager.canvas.width / bg.width, this.input.manager.canvas.height / bg.height);
    }
}
