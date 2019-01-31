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
    karaokeImg!: Karaoke;

    get sentence(): any {
        return this.config.sentence;
    }

    get videoUrl(): any {
        return this.sentence.video.url;
    }

    get imageKey(): any {
        return this.sentence.image.key;
    }

    get imageDelay(): any {
        return this.sentence.image.delay;
    }

    get words(): any {
        return this.sentence.words;
    }

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

        this.video = new video_t(this, 'video-1', 400, 300, 'video-1', this.videoUrl , 640, 400, false, () => {
            this.playeVideoWithAnimation();
            setTimeout(() => {
                this.complete();
            }, 6000)
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
            x: 600, 
            y: 550,
            items: this.words
        });

        this.karaokeImg = new Karaoke(this, {
            x: 700,
            y: 400,
            items: [{
                type: 'IMG',
                value: this.imageKey,
                width: 300,
                height: 250,
                delay: this.imageDelay,
            }]
        })
    }

    update() {
        this.video && this.video.update();
        this.karaoke.updateCurrent(this.video.time());
        this.karaokeImg.updateCurrent(this.video.time());
    }

    playeVideoWithAnimation() {
        this.video.play();
        this.karaoke.play();
        this.karaokeImg.play();
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
