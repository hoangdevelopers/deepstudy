import { playerAdapter } from "@/modules/player/framework/PlayerAdapter";
import {  EnglishPronunciationScene } from "./scenes/EnglishPronunciation";
import {  EnglishPronunciationWordDraw } from "./scenes/EnglishPronunciationWordDraw";

declare var Recorder: any;

const CONFIG =  {
    sctions: [
        {
            type: 'pronc',
            sentences: [{

            }]
        }
    ]
};

export class EnglishPronunciationAdapter extends playerAdapter {
  scenes: any[];
    recorder: any;

  constructor(config?: any) {
    super(config);
    this.scenes = [EnglishPronunciationScene, EnglishPronunciationWordDraw];

    this.recorder = new Recorder({
        sampleRate: 44100, //采样频率，默认为44100Hz(标准MP3采样率)
        bitRate: 128, //比特率，默认为128kbps(标准MP3质量)
        success: () => { //成功回调函数
        },
        error: function (msg: any) { //失败回调函数
            alert(msg);
        },
        fix: function (msg: any) { //不支持H5录音回调函数
            alert(msg);
        },
    });
  }

  start() {
    this.player.scene.start(EnglishPronunciationScene.id, {
      assets: {
        images: {
            television: '/assets/SAMPLE 1 Phonics/Graphic/television.png',
            star: '/assets/SAMPLE 1 Phonics/Graphic/image_star.png',
            airplance: '/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_Airplane.png',
            ant: '/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_ant.png',
            apple: '/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_apple.png'
        },
        sounds: {},
        spriteSheet: {
        }
      }
    });
  }
}
