export class playerAdapter {
     public options: any;
     public player!: Phaser.Game;
     public scenes: any[];

     constructor(options: any) {
          this.options = options;
          this.scenes = [];
     }

     start() {
     }

     setPlayer(player: any) {
          this.player = player;
     }
     
}