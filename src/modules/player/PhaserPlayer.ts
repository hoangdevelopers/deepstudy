import 'pixi.js';
import 'pixi';
import 'p2';

import { SenceManager } from './framework/SenceManager';

import { Boot } from './states/Boot';
import { Preloader } from './states/Preloader';

function parseConfig(preConfig: GameConfig): GameConfig{
    const postConfig = {
        ...preConfig
    };
    return postConfig;
}

export class PhaserPlayer extends Phaser.Game {

    constructor(config: GameConfig) {
        config = parseConfig(config);
        super (config);

        this.scene.add('boot', Boot);
        this.scene.add('preloader', Preloader);

        this.scene.start('boot');
    }

}
