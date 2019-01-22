import { BaseSence } from './BaseSence';
export interface IResourceConfig {
    type: string;
    src: string;
    key: string;
}
export class BaseAdapter {
    public scenes: BaseSence[];
    public config: any;

    public startScene: any;
    constructor(config: any) {
        this.config = config;
        this.scenes = [];
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