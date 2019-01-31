import { BaseSence, BaseSenceConfig } from './BaseSence';

export interface playerAdapterConfig {
     scenes: BaseSenceConfig[];
}

export interface playerAdapterSceneConfig {
     meta: {
          type: string
     },
     assets: any;
}
export class playerAdapter {
     public options: any;
     public player!: Phaser.Game;
     public scenes: any[];
     activeScene: number = 0;
     config: playerAdapterConfig = { scenes: [] };

     get currentSceneConfig(): BaseSenceConfig {
       const config = this.config.scenes[this.activeScene];
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