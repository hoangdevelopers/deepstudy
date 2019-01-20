<template>
  <div class="lesson">
    <Player></Player>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Player from '@/modules/player/Player.vue';

@Component({
  components: {
    Player,
  },
})
export default class Lesson extends Vue {
  constructor(config: any) {
    super(config);
  }

  beforeCreate() {
    this.parseParam();
  }

  private parseParam() {
  }

  get lessId(): string {
    return this.$route.params['lessId'];
  } 
}
</script>
