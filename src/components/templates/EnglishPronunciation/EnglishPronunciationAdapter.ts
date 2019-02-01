import { playerAdapter } from "@/modules/player/framework/PlayerAdapter";
import { EnglishPronunciationScene } from "./scenes/EnglishPronunciation";
import { EnglishPronunciationWordDraw } from "./scenes/EnglishPronunciationWordDraw";

const CONFIG = {
  global: {
    assets: {
      images: {
        btnPlay: "/assets/Button/btn_play.png",
        btnPlayPress: "/assets/Button/btn_play_.png",
        btnPlayActive: "/assets/Button/btn_play_00.png",
        btnRecord: "/assets/Button/btn_record.png",
        btnRecordPress: "/assets/Button/btn_record_.png",
        btnRecordActive: "/assets/Button/btn_record_00.png"
      }
    }
  },
  scenes: [
    {
      meta: {
        type: "EnglishPronunciationScene",
        index: 0,
        next: 1
      },
      assets: {
        images: {
          bg: "/assets/SAMPLE 1 Phonics/Graphic/bg.png",
          television: "/assets/SAMPLE 1 Phonics/Graphic/television.png",
          star: "/assets/SAMPLE 1 Phonics/Graphic/image_star.png",
          apple: "/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_apple.png"
        },
        sounds: {},
        spriteSheet: {}
      },
      sentence: {
        video: {
          url: "/assets/SAMPLE-1-Phonics/Video/L1_Week01_1.apple.mp4"
        },
        image: {
          key: "apple",
          delay: 4
        },
        words: [
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 0,
            parts: [
              {
                text: "Aa"
              }
            ]
          },
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 2,
            parts: [
              {
                text: "Aa"
              }
            ]
          },
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 4,
            parts: [
              {
                text: "a"
              },
              {
                text: "pple",
                style: { font: "bold 36px Arial", fill: "#000000" }
              }
            ]
          }
        ]
      }
    },
    {
      meta: {
        type: "EnglishPronunciationScene",
        index: 1,
        next: 2
      },
      assets: {
        images: {
          bg: "/assets/SAMPLE 1 Phonics/Graphic/bg.png",
          television: "/assets/SAMPLE 1 Phonics/Graphic/television.png",
          star: "/assets/SAMPLE 1 Phonics/Graphic/image_star.png",
          ant: "/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_ant.png"
        },
        sounds: {},
        spriteSheet: {}
      },
      sentence: {
        video: {
          url: "/assets/SAMPLE-1-Phonics/Video/L1_Week01_2.ant.mp4"
        },
        image: {
          key: "ant",
          delay: 4
        },
        words: [
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 0,
            parts: [
              {
                text: "Aa"
              }
            ]
          },
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 2,
            parts: [
              {
                text: "Aa"
              }
            ]
          },
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 4,
            parts: [
              {
                text: "a"
              },
              {
                text: "nt",
                style: { font: "bold 36px Arial", fill: "#000000" }
              }
            ]
          }
        ]
      }
    },
    {
      meta: {
        type: "EnglishPronunciationScene",
        index: 2,
        next: 3
      },
      assets: {
        images: {
          bg: "/assets/SAMPLE 1 Phonics/Graphic/bg.png",
          television: "/assets/SAMPLE 1 Phonics/Graphic/television.png",
          star: "/assets/SAMPLE 1 Phonics/Graphic/image_star.png",
          airplance:
            "/assets/SAMPLE 1 Phonics/Graphic/image_phonics/img_Airplane.png"
        },
        sounds: {},
        spriteSheet: {}
      },
      sentence: {
        video: {
          url: "/assets/SAMPLE-1-Phonics/Video/L1_Week01_3.airplane.mp4"
        },
        image: {
          key: "airplance",
          delay: 4
        },
        words: [
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 0,
            parts: [
              {
                text: "Aa"
              }
            ]
          },
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            delay: 0,
            parts: [
              {
                text: "Aa"
              }
            ]
          },
          {
            style: { font: "bold 36px Arial", fill: "#ff0000" },
            parts: [
              {
                text: "a"
              },
              {
                text: "irplance",
                style: { font: "bold 36px Arial", fill: "#000000" }
              }
            ]
          }
        ]
      }
    },
    {
      meta: {
        type: "EnglishPronunciationWordDraw",
        index: 3
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
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box_03.png",
          Abox01Bg:
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box_01_bg.png",
          Abox02Bg:
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box_02_bg.png",
          Abox03Bg:
            "/assets/SAMPLE 1 Phonics/Graphic/image_listen&trace_lines.A/A_box_03_bg.png"
        }
      },
      words: [
        {
          bg: "Abox",
          paths: [
            {
              img: "Abox01",
              bg: "Abox01Bg",
              from: { x: -10, y: -125 },
              to: { x: -88, y: 120 }
            },
            {
              img: "Abox02",
              bg: "Abox02Bg",
              from: { x: 13, y: -125 },
              to: { x: 106, y: 120 }
            },
            {
              img: "Abox03",
              bg: "Abox03Bg",
              from: { x: -55, y: 2 },
              to: { x: 58, y: 2 }
            }
          ]
        }
      ]
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
  }
}
