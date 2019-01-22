import { playerAdapter } from "@/modules/player/framework/PlayerAdapter";
import { SimpleDragAndShow } from "./sences/MathDrag";

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
            "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-003.png",
          buffalo:
            "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-006.png",
          "box-flat":
            "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-001.png",
          "box-crumpled":
            "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-002.png",
          "box-hard-crumpled":
            "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-005.png",
          "arrow":
            "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-004.png"
        },
        sounds: {},
        spriteSheet: {
          main: {
            png:
              "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2.png",
            json:
              "http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2.json"
          }
        }
      }
    });
  }
}
