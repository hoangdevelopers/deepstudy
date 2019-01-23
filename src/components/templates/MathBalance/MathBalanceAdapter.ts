import { playerAdapter } from "@/modules/player/framework/PlayerAdapter";
import { MathBalance } from './scenes/MathBalance';

export class MathBalanceAdapter extends playerAdapter {
  scenes: any[];

  constructor(config?: any) {
    super(config);
    this.scenes = [MathBalance];
  }

  start() {
    this.player.scene.start(MathBalance.id, {
      assets: {
        images: {
        },
        sounds: {},
        spriteSheet: {
        },
        atlas: {
            main: {
                img: 'http://localhost:8080/assets/M3-16-1-1(Sample3)/M3-16-1-1.png',
                json: 'http://localhost:8080/assets/M3-16-1-1(Sample3)/M3-16-1-1.json'
            }
        }
      }
    });
  }
}
