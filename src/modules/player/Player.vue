<template>
  <div class="player">
    <div class="container" ref="host"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { PhaserPlayer } from "./PhaserPlayer";

@Component({
  components: {}
})
export default class Player extends Vue {
  @Prop() private adapter!: any;

  public playerOption: any;
  public player: any;
  private _adapter: any;

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
      width: 1000,
      height: 800,
      adapter: this.adapter,
      audio: {
        // disableWebAudio: true
      }
    };
  }
}
</script>
