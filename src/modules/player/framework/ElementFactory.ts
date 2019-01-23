import { BaseElment } from './BaseElement';
import { BaseSence } from './BaseSence';

function objectTomap(obj: any) {
    const sets = Object.keys(obj).map(key => [key, obj[key]]);
    return new Map(<[[string, any]]>sets);
}

export class ElementFactory {
    elements: Map<string, any>;
    scene: BaseSence;

    constructor(options: any) {
        this.elements = objectTomap(options.elements);
        this.scene = options.scene;
    }

    createElement(config: any): any {
        const type = config.type;
        const elment = this.createElementByType(type, config);
        if( this.hasChildElement(config) ) {
            for( const subConfig of this.getChildElements(config) ) {
                const childElement = this.createElement(subConfig);
                // elment.host.add(childElement);
            }
        }
        return elment;
    }

    private getElementConstructorByType(type: string): any {
        return this.elements.get(type);
    }

    private createElementByType<T extends BaseElment>(type: string, config: any):T  {
        const Element = this.getElementConstructorByType(type);
        const element = new Element(this.scene, [], config);
        return element;
    }

    private hasChildElement(config: any) {
        return config && config.elements && config.elements.length > 0;
    }

    private getChildElements(config: any) {
        return config && config.elements && config.elements;
    }
}