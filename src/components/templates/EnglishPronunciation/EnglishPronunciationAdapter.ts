import { playerAdapter } from '@/modules/player/framework/PlayerAdapter';
import { EnglishPronunciation } from './scenes/EnglishPronunciation';

declare var HOST: any;
export class EnglishPronunciationAdapter extends playerAdapter {
    constructor(opts: any) {
        super(opts);
        this.scenes = [EnglishPronunciation];
        
    }
    public start() {
        this.startScene1({});
    }
    public startScene1(data: any) {
        this.player.scene.bringToTop(EnglishPronunciation.id);
        this.player.scene.start(EnglishPronunciation.id, {
            assets: {
                images: {
                    bg: HOST + '/assets/SAMPLE-1-Phonics/Graphic/bg.png',
                    btnCharacter1Active: HOST + '/assets/SAMPLE-2-Dialog/Graphic/image_character_Brian.png',
                    btnCharacter2Active: HOST + '/assets/SAMPLE-2-Dialog/Graphic/image_character_Ann.png',
                    btnPlay: HOST + '/assets/Button/btn_play.png',
                    btnPlayPress: HOST + '/assets/Button/btn_play_.png',
                    btnPlayActive: HOST + '/assets/Button/btn_play_00.png',
                    btnRecord: HOST + '/assets/Button/btn_record.png',
                    btnRecordPress: HOST + '/assets/Button/btn_record_.png',
                    btnRecordActive: HOST + '/assets/Button/btn_record_00.png',
                    backgroundout: HOST + '/assets/SAMPLE-2-Dialog/Graphic/image_dialog_background2.png',
                    backgroundin: HOST + '/assets/SAMPLE-2-Dialog/Graphic/image_dialog_background.png',
                    bubbleBgLeft: HOST + '/assets/SAMPLE-2-Dialog/Graphic/bubble-left.png',
                    bubbleBgMid: HOST + '/assets/SAMPLE-2-Dialog/Graphic/bubble-mid.png',
                    bubbleBgRight: HOST + '/assets/SAMPLE-2-Dialog/Graphic/bubble-right.png',
                },
                sounds: {
                    audio1: HOST + '/assets/SAMPLE-2-Dialog/Audio/Hi, Ann!.mp3',
                    audio2: HOST + '/assets/SAMPLE-2-Dialog/Audio/Hi, Brian!.mp3',
                    audio3: HOST + '/assets/SAMPLE-2-Dialog/Audio/Bye, Ann!.mp3',
                    audio4: HOST + '/assets/SAMPLE-2-Dialog/Audio/See you, Brian!.mp3',
                },
                spriteSheet: {
                },
            },
            options: {
                ...data,
                adapter: this
            }
        });
    }
}
