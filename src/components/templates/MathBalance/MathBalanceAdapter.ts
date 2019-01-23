import { playerAdapter } from "@/modules/player/framework/PlayerAdapter";
import { MathBalance } from './scenes/MathBalance';
declare var HOST: any;
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
                img: HOST + '/assets/M3-16-1-1(Sample3)/M3-16-1-1.png',
                json: HOST + '/assets/M3-16-1-1(Sample3)/M3-16-1-1.json'
            }
        }
      }
    });
  }
}
