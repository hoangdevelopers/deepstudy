import { BaseSence } from './BaseSence';
export interface IResourceConfig {
    type: 'IMAGE' 
}
export class BaseAdapter {
    public scenes: BaseSence[];
    public resources: any[];
    options: any;

    constructor(config?: any) {
        this.options = config;
        this.scenes = [];
        this.resources = [];
  
    }
    public setScenes(scenes: BaseSence[]) {
        this.scenes.push(...scenes);
    }
    public setResource(resources: any[]) {
        this.resources.push(...resources);
    }
}