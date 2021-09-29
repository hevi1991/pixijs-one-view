let resources = {
    common: {
        bg: "../images/bg.jpg",
        qrcode: "../images/ewm.png",
        musicoff: "../images/musicoff.png",
        musicon: "../images/musicon.png",
    },
    p1: {
        bg: "../images/p1-bg.png",
        cloud1: "../images/p1-cloud1.png",
        cloud2: "../images/p1-cloud2.png",
        grass1: "../images/p1-grass1.png",
        grass2: "../images/p1-grass2.png",
        house: "../images/p1-house.png",
        family: "../images/p1-p1.png",
        star: "../images/p1-star.png",
        tree: "../images/p1-tree.png",
    },
    p2: {
        grass: "../images/p2-1.png",
        boy: "../images/p2-boy.png",
        huati: "../images/p2-huati.png",
        lotsofyinfu: "../images/p2-lotsofyinfu.png",
        mother: "../images/p2-mother.png",
        school: "../images/p2-school.png",
        shitou: "../images/p2-shitou.png",
        tree4: "../images/p2-tree4.png",
        wutai: "../images/p2-wutai.png",
        yinfu: "../images/p2-yinfu.png",
    },
    w: [
        "../images/w1.png",
        "../images/w2.png",
        "../images/w3.png",
        "../images/w4.png",
        "../images/w5.png",
        "../images/w6.png",
        "../images/w7.png",
        "../images/w8.png",
        "../images/w9.png",
        "../images/w10.png",
        "../images/w11.png",
        "../images/w12.png",
        "../images/w13.png",
        "../images/w14.png",
        "../images/w15.png",
        "../images/w16.png",
        "../images/w17.png",
        "../images/w18.png",
        "../images/w19.png",
        "../images/w20.png",
        "../images/w21.png",
        "../images/w22.png",
        "../images/w23.png",
        "../images/w24.png",
        "../images/w25.png",
        "../images/w26.png",
        "../images/w27.png",
        "../images/w28.png",
        "../images/w29.png",
        "../images/w30.png",
        "../images/w31.png",
        "../images/w32.png",
        "../images/w33.png",
        "../images/w34.png",
    ],
    p3: ["../images/p3-1.png", "../images/p3-2.png", "../images/p3-3.png", "../images/p3-childbirth.png"],
    p4: ["../images/p4-1.png", "../images/p4-bg.png", "../images/p4-house3.png", "../images/p4-start.png"],
    x: [
        "../images/x1.png",
        "../images/x2.png",
        "../images/x3.png",
        "../images/x4.png",
        "../images/x5.png",
        "../images/x6.png",
        "../images/x7.png",
        "../images/x8.png",
        "../images/x9.png",
        "../images/x10.png",
        "../images/x11.png",
        "../images/x12.png",
        "../images/x13.png",
        "../images/x14.png",
        "../images/x15.png",
        "../images/x16.png",
        "../images/x17.png",
        "../images/x18.png",
        "../images/x19.png",
        "../images/x20.png",
        "../images/x21.png",
        "../images/x22.png",
        "../images/x23.png",
        "../images/x24.png",
        "../images/x25.png",
        "../images/x26.png",
        "../images/x27.png",
        "../images/x28.png",
        "../images/x29.png",
        "../images/x30.png",
        "../images/x31.png",
        "../images/x32.png",
        "../images/x33.png",
        "../images/x34.png",
        "../images/x35.png",
        "../images/x36.png",
        "../images/x37.png",
        "../images/x38.png",
        "../images/x39.png",
        "../images/x40.png",
        "../images/x41.png",
        "../images/x42.png",
        "../images/x43.png",
        "../images/x44.png",
        "../images/x45.png",
        "../images/x46.png",
        "../images/x47.png",
        "../images/x48.png",
        "../images/x49.png",
        "../images/x50.png",
        "../images/x51.png",
        "../images/x52.png",
    ],
    music: {
        bg: "../audios/bg.mp3",
        ding: "../audios/ding.mp3",
        huanhu: "../audios/huanhu.mp3",
    },
};

export default resources;

class AddingSprite {
    constructor({ img, x, y, alpha = 1, name, groupName }) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.alpha = alpha;
        this.name = name;
        this.groupName = groupName;
    }

    static from(img, x, y, name, groupName, alpha = 1) {
        return new AddingSprite({ img, x, y, alpha, name, groupName });
    }
}

const spriteGroupBgObjects = [AddingSprite.from(resources.common.bg, 0, 0, "bgSpr", "spriteGroupBg")];

const scene1Objects = [
    AddingSprite.from(resources.p1.bg, 0, 0, "p1BgSpr", "spriteGroupScenes/scene1"),
    AddingSprite.from(resources.p1.cloud1, -20, 177, "p1Cloud1", "spriteGroupScenes/scene1"),
    AddingSprite.from(resources.p1.cloud2, 752, 5, "p1Cloud2", "spriteGroupScenes/scene1"),
    AddingSprite.from(resources.p1.grass1, 0, 1098, "p1Grass1", "spriteGroupScenes/scene1"),
    AddingSprite.from(resources.p1.grass2, 836, 1166, "p1Grass2", "spriteGroupScenes/scene1"),
    AddingSprite.from(resources.p1.house, 732, 0, "p1House", "spriteGroupScenes/scene1"),
    AddingSprite.from(resources.p1.family, 996, 343, "p1Family", "spriteGroupScenes/scene1"),
    AddingSprite.from(resources.p1.star, 424, 419, "p1Star", "spriteGroupScenes/scene1", 0),
    AddingSprite.from(resources.p1.tree, 0, 604, "p1Tree", "spriteGroupScenes/scene1"),
];

const scene2Objects = [
    AddingSprite.from(resources.p2.grass, 0, 816, "p2Grass", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.school, 613, 31, "p2School", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.huati, 1298, 567, "p2Huati", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.boy, 1516, 414, "p2Boy", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.mother, 144, 768, "p2Mother", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.shitou, 1200, 1149, "p2Shitou", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.tree4, 1937, 46, "p2Tree4", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.wutai, 2243, 349, "p2Wutai", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.lotsofyinfu, 1932, 307, "p2Lotsofyinfu", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.p2.yinfu, 3009, 273, "p2Yinfu", "spriteGroupScenes/scene2"),
    AddingSprite.from(resources.w[0], 0, 0, "p2Child", "spriteGroupScenes/scene2"),
];

const scene3Objects = [
    AddingSprite.from(resources.p3[1], 826, 142, "p32", "spriteGroupScenes/scene3"),
    AddingSprite.from(resources.p3[0], 0, 80, "p31", "spriteGroupScenes/scene3", 0),
    AddingSprite.from(resources.p3[2], 971, 24, "p33", "spriteGroupScenes/scene3"),
    AddingSprite.from(resources.p3[3], 2397, 453, "p3Childbirth", "spriteGroupScenes/scene3"),
];
const scene4Objects = [
    AddingSprite.from(resources.p4[1], 388, 0, "p4bg", "spriteGroupScenes/scene4"),
    AddingSprite.from(resources.p4[2], 0, 0, "p4House3", "spriteGroupScenes/scene4"),
    AddingSprite.from(resources.p4[0], 701, 535, "p41", "spriteGroupScenes/scene4"),
    AddingSprite.from(resources.p4[3], 1401, 0, "p4Star", "spriteGroupScenes/scene4"),
];

const spriteGroupLastObjects = [AddingSprite.from(resources.x[0], 0, 0, "bgLast", "spriteGroupLast", 0)];

export { spriteGroupBgObjects, scene1Objects, scene2Objects, scene3Objects, scene4Objects, spriteGroupLastObjects };
export let spriteObjects = [
    ...spriteGroupBgObjects,
    ...scene1Objects,
    ...scene2Objects,
    ...scene3Objects,
    ...scene4Objects,
    ...spriteGroupLastObjects,
];
