export class playerAdapter {
     options: any;
     player!: Phaser.Game;

     constructor(options: any) {
          this.options = options;
     } 

     start() {
          this.player.scene.start('',);
     }

     setPlayer(player: any) {
          this.player = player;
     }
}