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
    host!: any;
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
    public hidden() {
        (<any>this.host).visible = false;
    }
    public visible() {
        (<any>this.host).visible = true;
    }
    public shake() {
        const rotation = (<any>this.host).rotation;
        const timeline = this.scene.tweens.timeline({
            targets: this.host,
            ease: 'Linear',
            duration: 100,
            tweens: [{
                rotation: rotation + 0.1
            },
            {
                rotation: rotation - 0.1,
            },
            {
                rotation: rotation + 0.1,
            },
            {
                rotation: rotation,
            }]
        });
    }
    public blink() {
        const alpha = (<any>this.host).alpha;
        const timeline = this.scene.tweens.timeline({
            targets: this.host,
            ease: 'Linear',
            duration: 400,
            tweens: [{
                alpha: alpha + 0.5
            },
            {
                alpha: alpha - 0.5,
            },
            {
                alpha: alpha + 0.5
            },
            {
                alpha: alpha - 0.5,
            },
            {
                alpha: alpha + 0.5
            },
            {
                alpha: alpha - 0.5,
            },
            {
                alpha: alpha + 0.5,
            },
            {
                alpha: alpha,
            }]
        });
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
