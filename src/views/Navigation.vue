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
      <router-link tag="li" to="/lesson/1">
        <a>English conversation</a>
      </router-link>
      <router-link tag="li" to="/lesson/2">
        <a>English pronunciation</a>
      </router-link>
      <router-link tag="li" to="/lesson/3">
        <a>Math drag 1</a>
      </router-link>
      <router-link tag="li" to="/lesson/4">
        <a>Math drag 2</a>
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
