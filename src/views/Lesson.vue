<template>
  <div class="lesson">
    <component v-bind:is="template" v-bind:lesson="lesson"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EnglishConversation  from '../components/templates/EnglishConversation/EnglishConversation.vue';
import EnglishPronunciation from '../components/templates/EnglishPronunciation/EnglishPronunciation.vue';
import MathDrag  from '../components/templates/MathDrag/MathDrag.vue';

const MOCKUP_LESSONS = new Map<string, any>([[
    'math-drag-1', 
    {
      id: 'math-drag-1',
      type: 'MathDrag',
      startScene: 'math-drag-1-sence-1',
      scenes: [{
        id: 'math-drag-1-sence-1',
        type: 'SimpleDragAndShow',
        config: {
          states: {
            'default': {
              color: 0xff0000,
            }
          } 
        },
        assets: {
          images: { 
            'puppy': 'http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-003.png',
            'buffalo': 'http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-006.png',
            'box-flat': 'http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-001.png',
            'box-crumpled': 'http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-002.png',
            'box-hard-crumpled': 'http://localhost:8080/assets/M3-16-1-2(Sample4)/M3-16-1-2-i-005.png',
          },
          sounds: { }
        },        
        elements: [{
          id: 'math-drag-1-sence-1-container',
          type: 'Container',
          layout: {
            type: 'duo-split',
            orentation: 'vertical',
            areas: [0.5, 0.5]
          },
          elements: [{
            id: 'math-drag-1-sence-1-part-1',
            type: 'Container',
            position: 1,
            elements: [{
              id: 'math-drag-1-sence-1-part-1-el-1',
              type: 'SimpleDragSprite',
              data: {
                drag: {
                  elements: [{
                    id: 'math-drag-1-sence-1-part-1-el-1-drag-el-1',
                    type: 'Sprite',
                    states: {
                      'default': {
                        image: 'puppy'
                      }
                    }
                  }]
                }, 
                drop: {
                  elements: [{
                    id: 'math-drag-1-sence-1-part-1-el-1-drop-el-1',
                    type: 'Sprite',
                    state: 'flat',
                    states: {
                      'flat': {
                        image: 'box-flat',
                      },
                      'crumpled': {
                        image: 'box-crumpled'
                      }
                    }
                  }]
                }
              }
            }]
          }, {
            id: 'math-drag-1-sence-1-part-1',
            type: 'Container',
            position: 2,
            elements: [{
              id: 'math-drag-1-sence-1-part-1-el-2',
              type: 'SimpleDragSprite'
            }]
          }]
        }]
      }]
    }]]);

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

<<<<<<< Updated upstream
  public created() {
    
=======
  public beforeCreate() {
    // this.parseParam();
>>>>>>> Stashed changes
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
