<template>
  <div class="lesson">
    {{template}}
    <component v-bind:is="component" v-bind:lesson="lesson"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EnglishConversation  from '../components/templates/EnglishConversation/EnglishConversation.vue';
import EnglishPronunciation from '../components/templates/EnglishPronunciation/EnglishPronunciation.vue';
import MathDrag  from '../components/templates/MathDrag/MathDrag.vue';
import MathBalance  from '../components/templates/MathBalance/MathBalance.vue';

const MOCKUP_LESSONS = new Map<string, any>([
  ['math-drag-1', 
    {
      id: 'math-drag-1',
      type: 'MathDrag',
    }],  ['math-drag-1', 
    {
      id: 'math-drag-1',
      type: 'MathDrag',
    }]
  ]);

@Component({
  components: {
    EnglishConversation,
    EnglishPronunciation,
    MathDrag,
    MathBalance
  },
})
export default class Lesson extends Vue {
  component: any;
  constructor(config: any) {
    super(config);
  }

  public created() {
     this.component = this.$route.params.lessId;
  } 
  public beforeCreate() {
    // this.parseParam();
  }

  parseParam() {
  }

  get lessId(): string {
    return this.$route.params['lessId'];
  }

  get template(): string {
    return (this.lesson || {}).type;
  }

  get lesson(): any {
    return MOCKUP_LESSONS.get(this.lessId);
  }
}
</script>
