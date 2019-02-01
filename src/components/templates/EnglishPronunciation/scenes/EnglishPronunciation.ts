import { Scene } from "@/modules/player/states/Sence";
import { Button } from '@/modules/player/elements/button/button';
import { Karaoke } from '../elements/karaoke';

declare var video_t: any;
declare var Recorder: any;


export class EnglishPronunciationScene extends Scene {
    static id = "EnglishPronunciationScene";
    
    television!: Phaser.GameObjects.Group;
    video!: any;
    phonic!: Phaser.GameObjects.Image;
    recordBtn: any;
    karaoke!: Karaoke;
    karaokeImg!: Karaoke;
    recorder: any;
    audio!: HTMLAudioElement;
    pharseActice: number = 0;
    playBtn!: Button;

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

    onInit() {
        this.recorder = new Recorder({
            sampleRate: 44100, //采样频率，默认为44100Hz(标准MP3采样率)
            bitRate: 128, //比特率，默认为128kbps(标准MP3质量)
            success: () => { //成功回调函数
            },
            error: function (msg: any) { //失败回调函数
                // alert(msg);
            },
            fix: function (msg: any) { //不支持H5录音回调函数
                alert(msg);
            },
        });
    }

    create() {
        this.createBackground();
        const telebg = this.add.image(
            this.centerX - 150,
            this.centerY,
            "television"
        );
        telebg.setScale(0.7);

        this.video = new video_t(this, 'video-' + Math.random(), 400, 300, 'video-' + Math.random(), this.videoUrl , 640, 400, false, () => {
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

        this.createPlayBtn();
        this.createRecordButton();
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

    public createPlayBtn() {
        this.playBtn = new Button(this, (active: any) => {
            
        }, {
                background: 'btnPlay',
                backgroundPress: 'btnPlayPress',
                backgroundActive: 'btnPlayActive',
                x: this.input.manager.canvas.width - 120,
                y: this.input.manager.canvas.height - 120,
            });
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

    startListenAndRepeat() {

    }

    public record() {
        this.recorder && this.recorder.start && this.recorder.start();
    }

    public stopRecord() {
        this.recorder && this.recorder.stop && this.recorder.stop();
        this.recorder && this.recorder.getBlob && this.recorder.getBlob((blob: any) => {
            var container = document.querySelector('#audio-container');
            this.audio = document.createElement('audio');
            this.audio.src = URL.createObjectURL(blob);
            this.audio.controls = true;
            // this.audio.play()
            container && container.appendChild(this.audio);
            
        });
        if (!this.recorder || !this.recorder.start || !this.recorder.stop || !this.recorder.getBlob) {
           
        }
    }

    public createBackground() {
        const bg = this.add.sprite(this.input.manager.canvas.width / 2, this.input.manager.canvas.height / 2, 'bg');
        bg.setScale(this.input.manager.canvas.width / bg.width, this.input.manager.canvas.height / bg.height);
    }

}
