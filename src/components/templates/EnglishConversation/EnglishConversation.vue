<template>
    <div class="EnglishConversation">
        EnglishConversation
        <Player v-bind:adapter="adapter"></Player>
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Player from '@/modules/player/Player.vue'; // @ is an alias to /src
import { BaseAdapter } from '@/modules/player/framework/BaseAdapter';
import { Adapter } from '@/components/templates/EnglishConversation/Adapter';
import { Scene } from '@/components/templates/EnglishConversation/scenes/Scene';


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
  public get adapter(): Adapter{
    return this._adapter;
  }
  private initAdapter() {
    this._adapter = new Adapter();
    const scene1 = new Scene({key: 'scene1'});
    this.adapter.setScenes([scene1]);

  }
}
</script>

<style scoped lang="scss">

</style>
