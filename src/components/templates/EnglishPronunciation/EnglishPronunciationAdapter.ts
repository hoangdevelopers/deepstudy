import { playerAdapter } from "@/modules/player/framework/PlayerAdapter";
import { EnglishPronunciationScene } from "./scenes/EnglishPronunciation";
import { EnglishPronunciationWordDraw } from "./scenes/EnglishPronunciationWordDraw";

declare var Recorder: any;

const CONFIG = {
  scenes: [
    {
      meta: {
        type: "EnglishPronunciationScene",
        index: 0,
        next: 1,
      },
      assets: {
        images: {
            bg: '/assets/SAMPLE 1 Phonics/Graphic/bg.png',
            television: '/assets/SAMPLE 1 Phonics/Graphic/television.png',
            star: '/assets/SAMPLE 1 Phonics/Graphic/image_star.png',
            apple: '/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_apple.png'
        },
        sounds: {},
        spriteSheet: {
        }
      },
      sentence: {
        video: {
          url: '/assets/SAMPLE-1-Phonics/Video/L1_Week01_1.apple.mp4',
        },
        image: {
          key: 'apple',
          delay: 4
        },
        words: [{
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 0,
          parts: [{
            text: 'Aa',
          }]
        }, {
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 2,
          parts: [{
            text: 'Aa',
          }]
        }, {
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 4,
          parts: [{
            text: 'a',
          }, {
            text: 'pple',
            style: {font: 'bold 36px Arial', fill: '#000000'}
          }]
        }]
      }
    }, {
      meta: {
        type: "EnglishPronunciationScene",
        index: 1,
        next: 2,
      },
      assets: {
        images: {
            bg: '/assets/SAMPLE 1 Phonics/Graphic/bg.png',
            television: '/assets/SAMPLE 1 Phonics/Graphic/television.png',
            star: '/assets/SAMPLE 1 Phonics/Graphic/image_star.png',
            ant: '/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_ant.png',
        },
        sounds: {},
        spriteSheet: {
        }
      },
      sentence: {
        video: {
          url: '/assets/SAMPLE-1-Phonics/Video/L1_Week01_1.apple.mp4',
        },
        image: {
          key: 'ant',
          delay: 4,
        },
        words: [{
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 0,
          parts: [{
            text: 'Aa'
          }]
        }, {
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 2,
          parts: [{
            text: 'Aa',
          }]
        }, {
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 4,
          parts: [{
            text: 'a',
          }, {
            text: 'nt',
            style: {font: 'bold 36px Arial', fill: '#000000'},            
          }]
        }]
      }
    }, {
      meta: {
        type: "EnglishPronunciationScene",
        index: 2,
        next: 3,
      },
      assets: {
        images: {
            bg: '/assets/SAMPLE 1 Phonics/Graphic/bg.png',
            television: '/assets/SAMPLE 1 Phonics/Graphic/television.png',
            star: '/assets/SAMPLE 1 Phonics/Graphic/image_star.png',
            airplance: '/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_Airplane.png',
        },
        sounds: {},
        spriteSheet: {
        }
      },
      sentence: {
        video: {
          url: '/assets/SAMPLE-1-Phonics/Video/L1_Week01_1.apple.mp4',
        },
        image: {
          key: 'airplance',
          delay: 4,
        },
        words: [{
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 0,
          parts: [{
            text: 'Aa',
          }]
        }, {
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          delay: 0,
          parts: [{
            text: 'Aa',
          }]
        }, {
          style: {font: 'bold 36px Arial', fill: '#ff0000'},
          parts: [{
            text: 'a',
          }, {
            text: 'irplance',
            style: {font: 'bold 36px Arial', fill: '#000000'},          
          }]
        }]
      }
    },{
      meta: {
        type: "EnglishPronunciationWordDraw",
        index: 3,
      },
      assets: {
        images: {
          Abox:
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box.png",
          Abox01:
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box_01.png",
          Abox02:
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box_02.png",
          Abox03:
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box_03.png"
        }
      },
      words: [{
          bg: "Abox",
          paths: [
            { img: "Abox01", from: { x: -10, y: -125 }, to: { x: -88, y: 120 } },
            { img: "Abox02",  from: { x: 13, y: -125 }, to: { x: 106, y: 120 }  },
            { img: "Abox03",  from: { x: -55, y: 2 }, to: { x: 58, y: 2 }  }
          ]
      }]
    }
  ]
};

export class EnglishPronunciationAdapter extends playerAdapter {
  scenes: any[];
  recorder: any;
  activeScene: number = 0;
  config: any = CONFIG;

  constructor(config?: any) {
    super(config);
    this.scenes = [EnglishPronunciationScene, EnglishPronunciationWordDraw];

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
}
