import { BaseSence } from '../framework/BaseSence';

export class Boot extends BaseSence {
    constructor(opts: any) {
        super(opts);
        // this.scene.start('preloader', opts);
    }
    init(){
        super.init(this.config);
        this.game.scene.start('preloader', this.config);
    }
}
