<template>
    <div class="EnglishConversation">
        EnglishConversation
        <Player></Player>
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Player from '@/components/Player.vue'; // @ is an alias to /src


@Component({
  components: {
    Player,
  },
})

export default class EnglishConversation extends Vue {
//   @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">

</style>
