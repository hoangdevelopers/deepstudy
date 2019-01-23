<style lang="scss">
  .navigation {
    ul {
      list-style: none;
    }
    .logo {
      width: 50px;
    }
  }
</style>
<template>
  <div class="navigation">
    <ul>
      <router-link tag="li" to="/lesson/EnglishConversation">
        <a>English conversation</a>
      </router-link>
      <router-link tag="li" to="/lesson/EnglishConversation">
        <a>English pronunciation</a>
      </router-link>
      <router-link tag="li" to="/lesson/MathDrag">
        <a>Math drag 1</a>
      </router-link>
      <router-link tag="li" to="/lesson/MathBalance">
        <a>Math balance</a>
      </router-link>
    </ul>
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
