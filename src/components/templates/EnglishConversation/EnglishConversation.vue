<template>
    <div class="EnglishConversation">
        <Player v-bind:adapter="adapter"></Player>
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Player from '@/modules/player/Player.vue'; // @ is an alias to /src
import { EnglishConversationAdapter } from './EnglishConversationAdapter';
import { playerAdapter } from '@/modules/player/framework/PlayerAdapter';

@Component({
  components: {
    Player,
  },
})

export default class EnglishConversation extends Vue {
  private _adapter: any;
  public created() {
    this.initAdapter();
  }
  public get adapter(): playerAdapter{
    return this._adapter;
  }
  private initAdapter() {
    this._adapter = new EnglishConversationAdapter();
    // const scene1 = new Scene({key: 'scene1'});
    // this.adapter.setScenes([scene1]);
    // this.adapter.setResource([{
    //   type: 'IMAGE',
    //   src: '../../../assets/logo.png',
    //   key: 'background'
    // }]);
    // this.adapter.setStartScene('scene1');

  }
}
</script>

<style scoped lang="scss">

</style>
