<template>
  <div class="lesson">
    <component v-bind:is="template"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EnglishConversation  from '../components/templates/EnglishConversation/EnglishConversation.vue';
import EnglishPronunciation from '../components/templates/EnglishPronunciation/EnglishPronunciation.vue';
import MathDrag  from '../components/templates/MathDrag/MathDrag.vue';

@Component({
  components: {
    EnglishConversation,
    EnglishPronunciation,
    MathDrag
  },
  created: function () {
    (this as any).component = this.$route.params.id;
  }
})
export default class Lesson extends Vue {
  constructor(config: any) {
    super(config);
  }

  public beforeCreate() {
    this.parseParam();
  }

  private parseParam() {
  }

  get lessId(): string {
    return this.$route.params['lessId'];
  }

  get template(): string {
    return this.lessId;
  }

}
</script>
