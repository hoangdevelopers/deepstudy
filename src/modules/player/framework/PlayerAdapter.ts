import { BaseSence, BaseSenceConfig } from './BaseSence';
import * as deepmerge from 'deepmerge';

export interface playerAdapterConfig {
     global?: BaseSenceConfig,
     scenes: BaseSenceConfig[];
}

export interface playerAdapterSceneConfig {
     meta?: {
          type: string
     },
     assets?: any;
}
export class playerAdapter {
     public options: any;
     public player!: Phaser.Game;
     public scenes: any[];
     activeScene: number = 0;
     config: playerAdapterConfig = { scenes: [] };

     get currentSceneConfig(): BaseSenceConfig {
       const global = this.config.global || {};   
       const sceneConfig = this.config.scenes[this.activeScene];
       const config = deepmerge.default(global, sceneConfig);
       config.adapter = this;
       return config;
     }
   

     constructor(options: any) {
          this.options = options;
          this.scenes = [];
     }

     start() {
          this.lauchScene();
     }

     setPlayer(player: any) {
          this.player = player;
     }

     
    nextScene() {
          this.activeScene++;
          this.lauchScene();
     }

     lauchScene() {
          const config = this.currentSceneConfig;
          this.lauchSceneFromConfig(config);
     }

     protected lauchSceneFromConfig(config: any) {
          this.player.scene.start(config.meta.type, config);
     }

     onSceneComplete(data: any, scene: BaseSence) {
          this.nextScene();
     }
     
}