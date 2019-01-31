import 'phaser';

import { Boot } from './states/Boot';
import { Preloader } from './states/Preloader';
import { BaseSence } from './framework/BaseSence';
import { playerAdapter } from './framework/PlayerAdapter';

function parseConfig(preConfig: GameConfigWithScenses): GameConfigWithScenses {
    const postConfig = {
        ...preConfig,
        physics: {
            default: 'matter',
            arcade: {
                gravity: {
                    x: 0,
                    y: 0
                },
                forceX: 0,
                forceY: 0,
                x: 0,
                y: 0
            },
            matter: {
                gravity: {
                    x: 0, 
                    y: 0
                }
            }
        }
    };
    return postConfig;
}

interface GameConfigWithScenses extends GameConfig {
    adapter: playerAdapter;
    startScene: string;
    scenes: BaseSence[];
}

export class PhaserPlayer extends Phaser.Game {
    options: GameConfigWithScenses;
    scenes!: Map<string, any>;
    adapter: playerAdapter;

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
        }
    }

    get scensesConfig() {
        return this.adapter.scenes;
    }
}
