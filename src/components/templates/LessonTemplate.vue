<template>
  <div>
    <component class="lesson-template" v-bind:is="component"></component>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EnglishConversation from '@/components/templates/EnglishConversation/EnglishConversation.vue'; // @ is an alias to /src

@Component({
  components: {
    EnglishConversation,
  },
})
export default class LessonTemplate extends Vue {
  @Prop() private component!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
