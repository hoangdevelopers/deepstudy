import 'p2';
import 'pixi';
import 'phaser-ce';

import { SenceManager } from './framework/SenceManager';

import { Boot } from './states/boot';
import { Preloader } from './states/preloader';

export class Player extends Phaser.Game {
    private senceManager = new SenceManager();

    constructor(config: Phaser.IGameConfig) {
        super (config);

        this.state.add('boot', Boot);
        this.state.add('preloader', Preloader);

        this.state.start('boot');
    }
}
