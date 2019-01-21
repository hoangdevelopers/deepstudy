import { Component, Prop, Vue } from 'vue-property-decorator';


export class BaseTemplate extends Vue {
    mounted() {

    }


    private get hostEl(): HTMLElement {
        return this.$refs.host as HTMLElement;
    }
}