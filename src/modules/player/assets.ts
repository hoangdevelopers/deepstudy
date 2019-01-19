/* tslint:disable */
/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        public static getName(): string { return 'background_template'; }

        public static getPNG(): string { return require('assets/images/background_template.png'); }
    }
}

export namespace Spritesheets {
    export class SpritesheetsMetalslugMummy374518 {
        public static getName(): string { return 'metalslug_mummy.[37,45,18,0,0]'; }

        public static getPNG(): string { return require('assets/spritesheets/metalslug_mummy.[37,45,18,0,0].png'); }
        public static getFrameWidth(): number { return 37; }
        public static getFrameHeight(): number { return 45; }
        public static getFrameMax(): number { return 18; }
        public static getMargin(): number { return 0; }
        public static getSpacing(): number { return 0; }
    }
}

export namespace Atlases {
    export class AtlasesPreloadSpritesArray {
        public static getName(): string { return 'preload_sprites_array'; }

        public static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); }

        public static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); }
    }
    export namespace AtlasesPreloadSpritesArray {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
    export class AtlasesPreloadSpritesHash {
        public static getName(): string { return 'preload_sprites_hash'; }

        public static getJSONHash(): string { return require('assets/atlases/preload_sprites_hash.json'); }

        public static getPNG(): string { return require('assets/atlases/preload_sprites_hash.png'); }
    }
    export namespace AtlasesPreloadSpritesHash {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
    export class AtlasesPreloadSpritesXml {
        public static getName(): string { return 'preload_sprites_xml'; }

        public static getPNG(): string { return require('assets/atlases/preload_sprites_xml.png'); }

        public static getXML(): string { return require('assets/atlases/preload_sprites_xml.xml'); }
    }
    export namespace AtlasesPreloadSpritesXml {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
}

export namespace Audio {
    export class AudioMusic {
        public static getName(): string { return 'music'; }

        public static getAC3(): string { return require('assets/audio/music.ac3'); }
        public static getM4A(): string { return require('assets/audio/music.m4a'); }
        public static getMP3(): string { return require('assets/audio/music.mp3'); }
        public static getOGG(): string { return require('assets/audio/music.ogg'); }
    }
}

export namespace Audiosprites {
    export class AudiospritesSfx {
        public static getName(): string { return 'sfx'; }

        public static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); }
        public static getJSON(): string { return require('assets/audiosprites/sfx.json'); }
        public static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); }
        public static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); }
        public static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); }
    }
    export namespace AudiospritesSfx {
        export enum Sprites {
            Laser1 = 'laser1',
            Laser2 = 'laser2',
            Laser3 = 'laser3',
            Laser4 = 'laser4',
            Laser5 = 'laser5',
            Laser6 = 'laser6',
            Laser7 = 'laser7',
            Laser8 = 'laser8',
            Laser9 = 'laser9',
        }
    }
}

export namespace GoogleWebFonts {
    export const Barrio: string = 'Barrio';
}

export namespace CustomWebFonts {
    export class Fonts2DumbWebfont {
        public static getName(): string { return '2Dumb-webfont'; }

        public static getFamily(): string { return '2dumbregular'; }

        public static getCSS(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.css'); }
        public static getEOT(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.eot'); }
        public static getSVG(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.svg'); }
        public static getTTF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.ttf'); }
        public static getWOFF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.woff'); }
    }
}

export namespace BitmapFonts {
    export class FontsFontFnt {
        public static getName(): string { return 'font_fnt'; }

        public static getFNT(): string { return require('assets/fonts/font_fnt.fnt'); }
        public static getPNG(): string { return require('assets/fonts/font_fnt.png'); }
    }
    export class FontsFontXml {
        public static getName(): string { return 'font_xml'; }

        public static getPNG(): string { return require('assets/fonts/font_xml.png'); }
        public static getXML(): string { return require('assets/fonts/font_xml.xml'); }
    }
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace TilemapJSON {
    export class TilemapsTilemap {
        public static getName(): string { return 'tilemap'; }

        public static getJSON(): string { return require('assets/tilemaps/tilemap.json'); }
    }
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Scripts {
    export class ScriptsBlurX {
        public static getName(): string { return 'BlurX'; }

        public static getJS(): string { return require('assets/scripts/BlurX.js'); }
    }
    export class ScriptsBlurY {
        public static getName(): string { return 'BlurY'; }

        public static getJS(): string { return require('assets/scripts/BlurY.js'); }
    }
}
export namespace Shaders {
    export class ShadersPixelate {
        public static getName(): string { return 'pixelate'; }

        public static getFRAG(): string { return require('assets/shaders/pixelate.frag'); }
    }
}
export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
