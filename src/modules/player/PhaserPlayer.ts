import 'phaser';

import { Boot } from './states/Boot';
import { Preloader } from './states/Preloader';
import { playerAdapter } from './framework/PlayerAdapter';

function parseConfig(preConfig: GameConfigWithScenses): GameConfigWithScenses {
    const postConfig = {
        ...preConfig,
    };
    return postConfig;
}

interface GameConfigWithScenses extends GameConfig {
    adapter: playerAdapter;
}

export class PhaserPlayer extends Phaser.Game {
    public options: GameConfigWithScenses;
    public scenes!: Map<string, any>;
    public adapter: playerAdapter;

    constructor(config: GameConfigWithScenses) {
        config = parseConfig(config);
        super(config);
        this.options = config;

        this.adapter = this.options.adapter;
        this.adapter.setPlayer(this);

        this.scenes = new Map();
        this.scene.add('boot', Boot);
        this.scene.add('preloader', Preloader);

        this.createScenses();
        this.adapter.start();
    }

    private createScenses() {
        for (const scene of this.adapter.scenes) {
            this.scene.add(scene.id, scene);
            this.scenes.set(scene.id, scene);
        }
    }

    get scensesConfig() {
        return this.adapter.scenes;
    }
}
