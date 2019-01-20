<template>
  <div class="player">
    <div class="container" ref="host"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PhaserPlayer  } from './PhaserPlayer';

@Component({
  components: {
 
  },
})
export default class Player extends Vue {
  public playerOption: any;
  public player: any;

  get hostEl() {
    return this.$refs.host;
  }

  public mounted() {
    this.initPlayer();
  }

  public initPlayer() {
    this.playerOption = this.getPlayerOption();
    this.player = new PhaserPlayer(this.playerOption);
  }

  public getPlayerOption() {
    return {
      parent: this.hostEl,
        type: Phaser.AUTO,
        width: 800,
        height: 600,
    };
  }

}
</script>
