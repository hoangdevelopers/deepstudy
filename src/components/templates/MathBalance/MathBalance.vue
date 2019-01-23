<template>
    <div class="EnglishConversation">
        <h1>MathBalance</h1>
        <Player v-bind:adapter="adapter">
        </Player>
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Player from '@/modules/player/Player.vue';
import  { MathBalanceAdapter } from './MathBalanceAdapter';

@Component({
  components: {
    Player,
  },
})
export default class MathBalance extends Vue {
  @Prop() private lesson!: any;
  adapter!: MathBalanceAdapter;

  created() {
      this.adapter = new MathBalanceAdapter();
  }
}
</script>

<style scoped lang="scss">

</style>
