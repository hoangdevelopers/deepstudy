import { Scene } from '@/modules/player/states/Sence';
import { Balance } from '../elements/Balance/Balance';

export class MathBalance extends Scene {
    static id = 'MathBalance';

    onInit() {
        this.use(Balance);
    }

    create() {
        this.createBalance();
    }

    private createBalance() {
        const balance = new Balance(this);
        // balance.host.setScale(0.7);

    }
}
