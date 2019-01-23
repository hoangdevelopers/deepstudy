import { BaseAdapter } from './BaseAdapter';

export class playerAdapter extends BaseAdapter {
     options: any;
     player!: Phaser.Game;

     start() {
     }

     setPlayer(player: any) {
          this.player = player;
     }
     
}