import { Scene } from '@/modules/player/states/Sence';
import { Drawing } from '../elements/Drawing/Drawing';

export class EnglishPronunciationWordDraw extends Scene {
    static id = 'EnglishPronunciationWordDraw';
    dawingA: any;

    onInit() {
        this.use(Drawing);
    }
    
    create() {
        for( const word of this.config.words ) {
            this.dawingA = new Drawing(this, word);
        }
    }
}
