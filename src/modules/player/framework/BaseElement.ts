import { BaseSence } from './BaseSence';

export interface BaseElementConfig {
    x?: number;
    y?: number;
    width?: 0;
    height?: 0;
}

const DEFAULT_CONFIG = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}
export class BaseElment extends Phaser.GameObjects.GameObject {
    id: any;
    config: any;
    host!: Phaser.GameObjects.GameObject | Phaser.GameObjects.Container | Phaser.GameObjects.Group;
    scene!: BaseSence;

    static assets: any = {};
    
    constructor(scene: Phaser.Scene, config: any = {}) {
        super(scene, 'container');
        this.config = this.parseConfig(config);
        this.id = config.id;

        this.beboreCreate();
        this.onCreate();
        this.affterCreate();
        
        if( config.active ) {
            this.setActive(true);
            this.scene.sys.updateList.add(this);
        }
    }

    protected beboreCreate() {
        this.host = this.scene.add.container(this.config.x, this.config.y);
    }

    protected onCreate() {

    }

    protected affterCreate() {

    }

    protected parseConfig(config: BaseElementConfig) {
        return {
            ...DEFAULT_CONFIG,
            ...config
        }
    }

    preUpdate() {}

    update() {}
}
