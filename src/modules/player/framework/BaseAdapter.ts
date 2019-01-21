import { BaseSence } from './BaseSence';

export class BaseAdapter {
    public scenes: BaseSence[];
    constructor() {
        this.scenes = [];
    }
    public setScenes(scenes: BaseSence[]) {
        this.scenes.push(...scenes);
    }
}