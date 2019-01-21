import { BaseElment } from '../../framework/BaseElement';

export class SimpleDragSprite extends BaseElment {
    graphics!: Phaser.GameObjects.Graphics;
    zone!: Phaser.GameObjects.Zone;
    drag!: Phaser.GameObjects.GameObject;

    onCreate() {
        this.createDragSprite();
        this.createDropZone();
    }

    affterCreate() {
        this.scene.input.on('dragstart', this.onDragStart , this);
        this.scene.input.on('drag', this.onDrag, this);
        this.scene.input.on('dragenter', this.onDragenter, this);
        this.scene.input.on('dragleave', this.onDragleave, this);
        this.scene.input.on('drop', this.onDrop, this);
        this.scene.input.on('dragend', this.onDragend, this);
    }

    private createDropZone() {
        //  A drop zone
        this.zone = this.scene.add.zone(500, 300, 300, 300).setRectangleDropZone(300, 300);
        this.add(this.zone);

        this.createDropSprite();
    }

    private createDropSprite() {
        //  Just a visual display of the drop zone
        this.graphics = this.scene.add.graphics();
        this.add(this.graphics);
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeRect(this.zone.x - this.zone.input.hitArea.width / 2, this.zone.y - this.zone.input.hitArea.height / 2, this.zone.input.hitArea.width, this.zone.input.hitArea.height);

    }

    private createDragSprite() {
        this.drag = this.scene.add.image(0, 0, 'puppy').setInteractive();
        this.add(this.drag);
        this.scene.input.setDraggable(this.drag, 1);
    }

    onDragStart(pointer: any, gameObject: any) {
        this.scene.children.bringToTop(gameObject);
    }

    onDrag(pointer: any, gameObject: { x: any; y: any; }, dragX: any, dragY: any) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    }

    onDragenter(pointer: any, gameObject: any, dropZone: any) {
        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ffff);
        this.graphics.strokeRect(this.zone.x - this.zone.input.hitArea.width / 2, this.zone.y - this.zone.input.hitArea.height / 2, this.zone.input.hitArea.width, this.zone.input.hitArea.height);

    }

    onDragleave(pointer: any, gameObject: any, dropZone: any) {
        this.graphics.clear();
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeRect(this.zone.x - this.zone.input.hitArea.width / 2, this.zone.y - this.zone.input.hitArea.height / 2, this.zone.input.hitArea.width, this.zone.input.hitArea.height);

    }

    onDrop(pointer: any, gameObject: any, dropZone: any) {
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;

        gameObject.input.enabled = false;
    }

    onDragend(pointer: any, gameObject: { x: any; input: { dragStartX: any; dragStartY: any; }; y: any; }, dropped: boolean) {
        if (!dropped)
        {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }

        this.graphics.clear();
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeRect(this.zone.x - this.zone.input.hitArea.width / 2, this.zone.y - this.zone.input.hitArea.height / 2, this.zone.input.hitArea.width, this.zone.input.hitArea.height);
    }
}