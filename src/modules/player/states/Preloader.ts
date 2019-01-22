import { BaseSence } from '../framework/BaseSence';
import { IResourceConfig } from '../framework/BaseAdapter';

export class Preloader extends BaseSence {
    // public resources: IResourceConfig[] = [];
    // public setResource(resources: IResourceConfig[]) {
    //     this.resources.push(...resources);
    // }
    constructor(opts: any) {
        super(opts);
    }
    init () {
        super.init(this.config);
        console.log(this.config)
        this.game.scene.start(this.config.adapter.startScene);
        
    }
}
