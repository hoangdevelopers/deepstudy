import { playerAdapter } from '@/modules/player/framework/PlayerAdapter';
import { EnglishConversation1 } from './scenes/EnglishConversation1';
import { EnglishConversation4 } from './scenes/EnglishConversation4';
import { EnglishConversation2 } from './scenes/EnglishConversation2';
import { EnglishConversation3 } from './scenes/EnglishConversation3';

declare var Recorder: any;
declare var HOST: any;
export class EnglishConversationAdapter extends playerAdapter {
    scripts: {
        id: string;
        action: string;
        data: any;
        timeout: number;
    }[];
    recorder: any;
    scriptActive: number = 0;
    audio: any;
    characterId!: number;
    constructor(config?: any) {
        super(config);
        this.scenes = [
            EnglishConversation1,
            EnglishConversation2,
            EnglishConversation3,
            EnglishConversation4,
        ];
        this.scripts = [
            {
                id: '1',
                action: 'SHOW_SCENE',
                data: {
                    id: '1',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '2',
                action: 'SHOW_SCENE',
                data: {
                    id: '2',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '3',
                action: 'SHOW_SCENE',
                data: {
                    id: '3',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '4',
                action: 'SHOW_SCENE',
                data: {
                    id: '4',
                    playAudio: true
                },
                timeout: 5000
            }, {
                id: '5',
                action: 'SHOW_SCENE',
                data: {
                    id: '1',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '6',
                action: 'SHƠW_RECORD',
                data: {
                    id: '1',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '7',
                action: 'SHƠW_PLAY',
                data: {
                    id: '1',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '8',
                action: 'SHOW_SCENE',
                data: {
                    id: '2',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '9',
                action: 'SHƠW_RECORD',
                data: {
                    id: '2',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '10',
                action: 'SHƠW_PLAY',
                data: {
                    id: '2',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '11',
                action: 'SHOW_SCENE',
                data: {
                    id: '3',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '12',
                action: 'SHƠW_RECORD',
                data: {
                    id: '3',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '13',
                action: 'SHƠW_PLAY',
                data: {
                    id: '3',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '14',
                action: 'SHOW_SCENE',
                data: {
                    id: '4',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '15',
                action: 'SHƠW_RECORD',
                data: {
                    id: '4',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '16',
                action: 'SHƠW_PLAY',
                data: {
                    id: '4',
                    playAudio: true
                },
                timeout: 0
            }, {
                id: '17',
                action: 'SHOW_SCENE',
                data: {
                    id: '1',
                    playAudio: true
                },
                timeout: 3000
            }, {
                id: '18',
                action: 'CHOOSE_CHARACTER',
                data: {
                    id: '1',
                    playAudio: false
                },
                timeout: 0,
            }, {
                id: '19',
                action: 'SHƠW_RECORD_OF_CHARACTER',
                data: {
                    id: '1',
                    playAudio: true,
                    characterId: 1,
                },
                timeout: 0,
            }, {
                id: '20',
                action: 'SHƠW_PLAY_OF_CHARACTER',
                data: {
                    id: '1',
                    playAudio: true,
                    characterId: 1,
                },
                timeout: 0,
            }, {
                id: '21',
                action: 'SHOW_SCENE',
                data: {
                    id: '2',
                    playAudio: true,
                    chooseCharacter: true,
                },
                timeout: 3000
            }, {
                id: '22',
                action: 'SHƠW_RECORD_OF_CHARACTER',
                data: {
                    id: '2',
                    playAudio: true,
                    characterId: 2,
                },
                timeout: 0,
            }, {
                id: '23',
                action: 'SHƠW_PLAY_OF_CHARACTER',
                data: {
                    id: '2',
                    playAudio: true,
                    characterId: 2,
                },
                timeout: 0,
            }, {
                id: '24',
                action: 'SHOW_SCENE',
                data: {
                    id: '3',
                    playAudio: true,
                    chooseCharacter: true,
                },
                timeout: 3000
            }, {
                id: '25',
                action: 'SHƠW_RECORD_OF_CHARACTER',
                data: {
                    id: '3',
                    playAudio: true,
                    characterId: 1,
                },
                timeout: 0,
            }, {
                id: '26',
                action: 'SHƠW_PLAY_OF_CHARACTER',
                data: {
                    id: '3',
                    playAudio: true,
                    characterId: 1,
                },
                timeout: 0,
            }, {
                id: '27',
                action: 'SHOW_SCENE',
                data: {
                    id: '4',
                    playAudio: true,
                    chooseCharacter: true,
                },
                timeout: 3000
            }, {
                id: '28',
                action: 'SHƠW_RECORD_OF_CHARACTER',
                data: {
                    id: '4',
                    playAudio: true,
                    characterId: 2,
                },
                timeout: 0,
            }, {
                id: '29',
                action: 'SHƠW_PLAY_OF_CHARACTER',
                data: {
                    id: '4',
                    playAudio: true,
                    characterId: 2,
                },
                timeout: 0,
            }
        ];
        this.recorder = new Recorder({
            sampleRate: 44100, //采样频率，默认为44100Hz(标准MP3采样率)
            bitRate: 128, //比特率，默认为128kbps(标准MP3质量)
            success: () => { //成功回调函数
            },
            error: function (msg: any) { //失败回调函数
                alert(msg);
            },
            fix: function (msg: any) { //不支持H5录音回调函数
                alert(msg);
            },
        });
    }
    triggerAction() {
        const script = this.scripts[this.scriptActive];
        if (!script) {
            return;
        }
        console.log('triggerAction', script.id, script.action);
        this.scriptActive++;
        this.doAction(script);
    }
    doAction(script: any) {
        switch (script.action) {
            case 'SHOW_SCENE': {
                this.startScene(script.data.id, {...script.data, characterActiveId: this.characterId});
                if (script.timeout) {
                    setTimeout(() => {
                        this.triggerAction()
                    }, script.timeout);
                }
                break;
            }
            case 'SHƠW_RECORD': {
                this.player.scene.bringToTop(script.data.id);
                const scene = this.player.scene.getScene(script.data.id);
                scene && (<any>scene).showRecord();
                if (script.timeout) {
                    setTimeout(() => {
                        this.triggerAction();
                    }, script.timeout);
                }
                break;
            }
            case 'SHƠW_PLAY': {
                this.player.scene.bringToTop(script.data.id);
                const scene = this.player.scene.getScene(script.data.id);
                scene && (<any>scene).showPlayBtn();
                if (script.timeout) {
                    setTimeout(() => {
                        this.triggerAction();
                    }, script.timeout);
                }
                break;
            }
            case 'CHOOSE_CHARACTER': {
                this.player.scene.bringToTop(script.data.id);
                const scene = this.player.scene.getScene(script.data.id);
                scene && (<any>scene).showChooseCharacter();
                if (script.timeout) {
                    setTimeout(() => {
                        this.triggerAction();
                    }, script.timeout);
                }
                break;
            }
            case 'SHƠW_RECORD_OF_CHARACTER': {
                this.player.scene.bringToTop(script.data.id);
                const scene = this.player.scene.getScene(script.data.id);
                if (this.characterId == script.data.characterId) {
                    scene && (<any>scene).showRecord();
                } else {
                    this.triggerAction();
                }
                break;
            }
            case 'SHƠW_PLAY_OF_CHARACTER': {
                this.player.scene.bringToTop(script.data.id);
                const scene = this.player.scene.getScene(script.data.id);
                if (this.characterId == script.data.characterId) {
                    scene && (<any>scene).showPlayBtn();
                } else {
                    this.triggerAction();
                }
                break;
            }
        }
    }

    chooseCharacter(id: number) {
        this.characterId = id;
        if (['18'].includes(this.scripts[this.scriptActive - 1].id)) {
            this.triggerAction();
        }
    }

    public start() {
        this.triggerAction();
    }

    startScene(id: string, data: any) {
        switch (id) {
            case '1': {
                this.startScene1(data);
                break;
            }
            case '2': {
                this.startScene2(data);
                break;
            }
            case '3': {
                this.startScene3(data);
                break;
            }
            case '4': {
                this.startScene4(data);
                break;
            }
        }
    }
    public startScene1(data: any) {
        this.player.scene.bringToTop(EnglishConversation1.id);
        this.player.scene.start(EnglishConversation1.id, {
            assets: {
                images: {
                    btnCharacter1: HOST + '/assets/SAMPLE-2-Dialog/Graphic/image_character_Brian_gray.png',
                    btnCharacter2: HOST + '/assets/SAMPLE-2-Dialog/Graphic/image_character_Ann_gray.png',
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

    public startScene2(data: any) {
        this.player.scene.bringToTop(EnglishConversation2.id);
        this.player.scene.start(EnglishConversation2.id, {
            options: {
                ...data,
                adapter: this
            }
        });
    }

    public startScene3(data: any) {
        this.player.scene.bringToTop(EnglishConversation3.id);
        this.player.scene.start(EnglishConversation3.id, {
            options: {
                ...data,
                adapter: this
            }
        });
    }

    public startScene4(data: any) {
        this.player.scene.bringToTop(EnglishConversation4.id);
        this.player.scene.start(EnglishConversation4.id, {
            options: {
                ...data,
                adapter: this
            }
        });
    }
    public record() {
        this.recorder && this.recorder.start && this.recorder.start();
    }
    public stopRecord() {
        this.recorder && this.recorder.stop && this.recorder.stop();
        this.recorder && this.recorder.getBlob && this.recorder.getBlob((blob: any) => {
            var container = document.querySelector('#audio-container');
            this.audio = document.createElement('audio');
            this.audio.src = URL.createObjectURL(blob);
            this.audio.controls = true;
            // this.audio.play()
            container && container.appendChild(this.audio);
            if (['6', '9', '12', '15', '19', '22', '25', '28'].includes(this.scripts[this.scriptActive - 1].id)) {
                this.triggerAction();
            }
        });
        if (!this.recorder || !this.recorder.start || !this.recorder.stop || !this.recorder.getBlob) {
            if (['6', '9', '12', '15', '19', '22', '25', '28'].includes(this.scripts[this.scriptActive - 1].id)) {
                this.triggerAction();
            }
        }
    }
    public playMyVoid() {
        this.audio && this.audio.play();
        const cb = () => {
            if (['7', '10', '13', '16', '20', '23', '26', '29'].includes(this.scripts[this.scriptActive - 1].id)) {
                this.triggerAction();
            }
        }
        this.audio && this.audio.addEventListener("ended", cb, false);
        if (!this.audio) {
            cb();
        }
    }
}
