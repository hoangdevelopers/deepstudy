import { BaseSence } from './BaseSence';
export interface IResourceConfig {
    type: string;
    src: string;
    key: string;
}
export class BaseAdapter {
    public scenes: BaseSence[];
    public resources: any[];
    options: any;
    startScene!: string;

    constructor(config?: any) {
        this.options = config;
        this.scenes = [];
        this.resources = [];
  
    }
    public setScenes(scenes: BaseSence[]) {
        this.scenes.push(...scenes);
    }
    
    public setStartScene(startScene: string) {
        this.startScene = startScene;
    }
    setPlayer(player: any){

    }
    start(){

    }
}