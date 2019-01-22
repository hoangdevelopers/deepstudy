
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
    host!: Phaser.GameObjects.Container;
    
    constructor(scene: Phaser.Scene, config: any = {}) {
        super(scene, 'group');
        this.config = this.parseConfig(config);
        this.id = config.id;

        this.beboreCreate();
        this.onCreate();
        this.affterCreate();
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
}
