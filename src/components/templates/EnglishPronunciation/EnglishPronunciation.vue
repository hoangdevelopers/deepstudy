<template>
    <div class="EnglishPronunciation">
        EnglishPronunciation
        <Player v-bind:adapter="adapter"></Player>
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Player from '@/modules/player/Player.vue'; // @ is an alias to /src
import { EnglishPronunciationAdapter } from './EnglishPronunciationAdapter';
import { playerAdapter } from '@/modules/player/framework/PlayerAdapter';

@Component({
  components: {
    Player,
  },
})

export default class EnglishPronunciation extends Vue {
  private _adapter: any;
  public created() {
    this.initAdapter();
  }
  public get adapter(): playerAdapter{
    return this._adapter;
  }
  private initAdapter() {
    console.log('init adap')
    this._adapter = new EnglishPronunciationAdapter({});
  }
}
</script>

<style scoped lang="scss">

</style>
