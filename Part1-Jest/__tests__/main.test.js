const formatVolumeIconPath = require("../assets/scripts/main");

const icon = {
    high: './assets/media/icons/volume-level-3.svg',
    medium: './assets/media/icons/volume-level-2.svg',
    low: './assets/media/icons/volume-level-1.svg',
    zero: './assets/media/icons/volume-level-0.svg'
}

describe('vol level ', () =>{
    test('icon equal vol-level 3 when vol > 66', () =>{
        expect(formatVolumeIconPath(67)).toMatch(icon.high);
        expect(formatVolumeIconPath(100)).toMatch(icon.high);
        expect(formatVolumeIconPath(80)).toMatch(icon.high);
    });

    test('icon equal vol-level 2 when vol > 33', () =>{
        expect(formatVolumeIconPath(34)).toMatch(icon.medium);
        expect(formatVolumeIconPath(66)).toMatch(icon.medium);
        expect(formatVolumeIconPath(45)).toMatch(icon.medium);
    });

    test('icon equal vol-level 1 when vol > 0', () =>{
        expect(formatVolumeIconPath(1)).toMatch(icon.low);
        expect(formatVolumeIconPath(33)).toMatch(icon.low);
        expect(formatVolumeIconPath(25)).toMatch(icon.low);
    });

    test('icon equal vol-level 0 when vol = 0', () =>{
        expect(formatVolumeIconPath(0)).toMatch(icon.zero);
    });
})

