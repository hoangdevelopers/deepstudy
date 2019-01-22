import 'phaser';

import { SenceManager } from './framework/SenceManager';

import { Boot } from './states/Boot';
import { Preloader } from './states/Preloader';
import { Scene } from './states/Sence';
import { BaseAdapter } from './framework/BaseAdapter';
import { BaseSence } from './framework/BaseSence';

function parseConfig(preConfig: GameConfigWithScenses): GameConfigWithScenses {
    const postConfig = {
        ...preConfig,
    };
    return postConfig;
}

interface GameConfigWithScenses extends GameConfig {
    adapter: BaseAdapter;
    startScene: string;
    scenes: BaseSence[];
}

export class PhaserPlayer extends Phaser.Game {
    options: GameConfigWithScenses;
    scenes!: Map<string, any>;
    adapter: BaseAdapter;

    constructor(config: GameConfigWithScenses) {
        config = parseConfig(config);
        super (config);
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
        for(const scene of this.adapter.scenes) {
            this.scene.add(scene.id, scene);
            this.scenes.set(scene.id, scene);
        } 
    }


    private startScense(id: string) {
        const opt = this.scenes.get(id);
        this.scene.start(id, opt);
    }

    get scensesConfig() {
        return this.options.scenes;
    }
}
