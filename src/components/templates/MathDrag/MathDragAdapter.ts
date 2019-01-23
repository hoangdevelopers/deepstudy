import { playerAdapter } from "@/modules/player/framework/PlayerAdapter";
import { SimpleDragAndShow } from "./sences/MathDrag";
declare var HOST: any;
export class MathDragAdapter extends playerAdapter {
  scenes: any[];

  constructor(config?: any) {
    super(config);
    this.scenes = [SimpleDragAndShow];
  }

  start() {
    this.player.scene.start(SimpleDragAndShow.id, {
      assets: {
        images: {
          puppy:
            HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-003.png",
          buffalo:
            HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-006.png",
          "box-flat":
            HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-001.png",
          "box-crumpled":
            HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-002.png",
          "box-hard-crumpled":
            HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-005.png",
          "arrow":
            HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-004.png"
        },
        sounds: {},
        spriteSheet: {
          main: {
            png:
              HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2.png",
            json:
              HOST + "/assets/M3-16-1-2(Sample4)/M3-16-1-2.json"
          }
        }
      }
    });
  }
}
