import { BaseSence } from '../framework/BaseSence';
import {ElementFactory } from '../framework/ElementFactory';
import { Container } from '../elements/Container/Container';
import { SimpleDragSprite } from '../elements/SimpleDragSprite/SimpleDragSprite';

const ELEMENTS = {
    Container,
    SimpleDragSprite
}

export class Scene extends BaseSence {
    elementFactory: ElementFactory;
    elements: Map<string, any>;

    constructor(opt: any) {
        super(opt);
        this.elements = new Map();
        this.elementFactory = new ElementFactory({
            scene: this,
            elements: ELEMENTS
        });
    }
    init(options: any) {
        super.init(options);
        // if( Array.isArray(options.elements)) {
        //     for(const el of options.elements ) {
        //         this.addElement(el);
        //     }
        // }
    }

    addElement(config: any) {
        const element = this.elementFactory.createElement(config);
        this.add.group(element);

        this.elements.set(element.id, element);
    }


}
