<template>
  <div class="navigation">
    <div>
      <router-link to="/lesson/EnglishConversation">English Conversation Lesson</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Navigation extends Vue {}
</script>
