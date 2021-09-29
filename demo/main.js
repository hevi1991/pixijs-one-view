import PhyTouch from "phy-touch";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";

class Skeleton {
    constructor(opt) {
        this.container = opt.el;
        this.sizes = {
            width: 750,
            height: 1448,
        };
        this.app = new PIXI.Application({ width: this.sizes.width, height: this.sizes.height });
        this.container.appendChild(this.app.view);

        this.loader = this.app.loader;
        this.loadResources().load((_) => {
            console.log("All loaded");

            this.sprite1 = new PIXI.Sprite.from(this.resources.p1[0]);
            this.sprite1.position.set(this.sizes.width / 2, this.sizes.height / 2);
            this.sprite1.anchor.set(0.5, 0.5); // 中心点
            this.sprite1.alpha = 0;
            this.app.stage.addChild(this.sprite1);

            this.sprite2 = new PIXI.Sprite.from(this.resources.arr[0]);
            this.sprite2.position.set(this.sizes.width / 2, this.sizes.height / 2);
            this.sprite2.anchor.set(0.5, 0.5);
            this.sprite2.alpha = 0;
            this.app.stage.addChild(this.sprite2);

            // 动画精灵
            // const textureArray = this.resources.arr.map((img) => new PIXI.Texture.from(img));
            // this.animatedSprite = new PIXI.AnimatedSprite(textureArray);
            // this.animatedSprite.animationSpeed = 0.3;
            // this.animatedSprite.play();
            // this.app.stage.addChild(this.animatedSprite);

            this.setupAnimation();

            this.touch = new PhyTouch({
                touch: "body",
                maxSpeed: 0.1,
                min: -2000,
                max: 0,
                bindSelf: false,
                value: 0,
                change: (value) => {
                    const progess = value / this.touch.min;
                    console.log(this.sprite1.alpha, this.sprite2.alpha, progess.toFixed(2));
                    // 更新动画进度
                    this.timeline.seek(progess);
                    // 更新sprite2纹理
                    this.updateSprite2Texture(progess);
                },
            });
        });
    }

    loadResources() {
        const imageP1 = [`../images/p1.png`];
        const imageArr = new Array(52);

        let i = 1;
        for (let _ of imageArr) {
            let imgPath = String(i);
            let zeroCount = 4 - imgPath.length;
            imgPath = Array(zeroCount + 1).join("0") + imgPath;
            imageArr[i - 1] = `../images/${imgPath}.png`;
            i++;
        }

        this.resources = {
            p1: imageP1,
            arr: imageArr,
        };

        this.loader.add([...this.resources.p1, ...this.resources.arr]);
        this.loader.onProgress.add((loader, resource) => {
            // console.log(resource.url, `${loader.progress.toFixed(2)}%`); // todo 加载提示
        });

        return this.loader;
    }

    setupAnimation() {
        this.timeline = gsap.timeline({ paused: true });
        // https://greensock.com/docs/v3/GSAP/Timeline
        this.timeline.to(this.sprite1, { alpha: 1, duration: 0.1 }, 0.3);
        this.timeline.to(this.sprite2, { alpha: 1, duration: 0.1 }, 0.5);
    }

    updateSprite2Texture(progess) {
        if (progess > 0.6) {
            // 当前进度转化成后面图片关键帧纹理对应下标，0.3 为运行 30% 的动画时间
            let index = Math.floor(((progess - 0.6) / 0.3) * this.resources.arr.length);
            index = index >= this.resources.arr.length ? this.resources.arr.length - 1 : index; // 处理超过30%后的下标越界
            this.sprite2.texture = new PIXI.Texture.from(this.resources.arr[index]);
        }
    }
}

new Skeleton({ el: document.querySelector("#stage") });
