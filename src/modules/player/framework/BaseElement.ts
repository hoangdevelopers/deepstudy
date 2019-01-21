
export class BaseElment extends Phaser.GameObjects.GameObject {
    id: any;
    config: any;
    host: Phaser.GameObjects.Group;
    
    constructor(scene: Phaser.Scene, children: any[], config: any) {
        super(scene, 'group');
        this.config = config;
        this.id = config.id;

        this.host = this.scene.add.group([]);

        this.onCreate();
        this.affterCreate();
    }

    protected onCreate() {

    }

    protected affterCreate() {

    }
}
