<template>
  <div class="home">
    <LessonTemplate v-bind:component="component"></LessonTemplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LessonTemplate from '@/components/templates/LessonTemplate.vue'; // @ is an alias to /src
@Component({
  components: {
    LessonTemplate
  },
  created: function () {
    (this as any).component = this.$route.params.id;
  }
})

export default class Lesson extends Vue {
  public component: string = '';
  
}
</script>
