<template>
    <div class="EnglishConversation">
        <h1>MathDrag</h1>
        <Player v-bind:adapter="adapter">
        </Player>
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Player from '@/modules/player/Player.vue';
import  { MathDragAdapter } from './MathDragAdapter';

@Component({
  components: {
    Player,
  },
})
export default class MathDrag extends Vue {
  @Prop() private lesson!: any;
  adapter!: MathDragAdapter;

  created() {
      this.adapter = new MathDragAdapter();
  }

  get scenes() {
      return this.lesson.scenes;
  }

  get id() {
      return this.lesson.id;
  }

  get type() {
      return this.lesson.type;
  }

  get startScene() {
      return this.lesson.startScene;
  }

}
</script>

<style scoped lang="scss">

</style>
