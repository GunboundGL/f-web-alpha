(function (window, document) {
    const VALUES = {
        COLORS: {
            BLACK: "#000",
            TRANSPARENT: "transparent",
            WHITE: "#fff"
        },
        WINDOW: {
            WIDTH: 800,
            HEIGHT: 600,
            MIN: 0,
        },
        FPS: 20,
        SECONDS_INTERVAL: 10,
        SECONDS_SLEEP: 15000,
        SIZE: {
            CLOSE: {
                LEFT: 0,
                RIGHT: 600,
            },
            OPEN: {
                LEFT: 600,
                RIGHT: 0,
            },
            MAX_MIN: 630
        },
        SLEEP: [
            {
                x: 0,
                y: 20,
                r: 12
            },
            {
                x: 20,
                y: 60,
                r: 9
            },
            {
                x: 60,
                y: 600,
                r: 0
            }
        ]
    }

    const LOCALE = {
        TITLE: {
            LIBRARY_NAME: "Transition Gunbound"
        },
        MESSAGE: {
            START: "[Gunbound Transition] - Developed by lnferno"
        },
        ERROR: {
            LIBRARY_EXIST: "Library already exist"
        }
    }

    const helpers = {
        randomKey: function () {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }
    }

    class BaseException extends Error {
        constructor(message) {
            super(`[${LOCALE.TITLE.LIBRARY_NAME}]: ${message}`);
        }
    }

    class LibraryExistException extends BaseException {
        constructor() {
            super(LOCALE.ERROR.LIBRARY_EXIST);
        }
    }

    class TransitionGunbound {
        window = {
            w: VALUES.WINDOW.WIDTH,
            h: VALUES.WINDOW.HEIGHT,
        };
        container = null;
        transition = null;
        clicked = false;
        imagesIntro = [];
        callbacksIntro = [];

        constructor() {
            console.log(LOCALE.MESSAGE.START)
        }

        static init(root, imagesIntro = [], callbacks = []) {
            const tgb = new TransitionGunbound();
            window.tgb = tgb;
            tgb.buildElements();
            tgb.draw(root);
            tgb.imagesIntro = imagesIntro;
            tgb.callbacksIntro = callbacks;
            return tgb;
        }

        draw(root) {
            this.container.appendChild(this.transition);
            document.getElementById(root).appendChild(this.container);
        }

        buildElements() {
            this.container = this.getContainer();
            this.transition = this.getTransition();
        }

        getContainer() {
            return this.generateElement("div", helpers.randomKey(), {
                zIndex: 1000,
                top: 0,
                left: 0,
                position: "absolute",
            });
        }

        getTransition() {
            return this.generateElement("canvas", helpers.randomKey(), {
                backgroundColor: VALUES.COLORS.BLACK,
                width: "960px",
                height: "600px",
            });
        }

        generateElement(type, id, style) {
            const element = document.createElement(type);
            element.id = id;
            for (let key in style) {
                element.style[key] = style[key];
            }
            element.addEventListener("click", () => {
                this.addClicked();
            });
            return element;
        }

        async intro() {
            await this.sleep({ clicked: true })
            for (let i = 0; i < this.imagesIntro.length; i++) {
                this.callbacksIntro[i]();
                await this.syncChangeBackgroundImage(this.imagesIntro[i])
                await this.open();
                await this.sleep({ clicked: true });
                await this.close();
            }
            this.removeBackgroundImage();
            await this.open();
            this.hide();
        }

        async closeAndOpen(onClose) {
            this.show();
            await this.close();
            await this.sleep();
            onClose();
            await this.open();
            this.hide();
        }

        async syncCloseAndOpen(onClose) {
            this.show();
            await this.close();
            onClose();
        }

        async openImage(img) {
            await this.syncChangeBackgroundImage(img)
            await this.open();
            await this.sleep({ clicked: true });
            await this.close();
        }

        async close() {
            return new Promise((resolve, reject) => {
                try {
                    let dataTemporal = {
                        ...VALUES.SIZE.CLOSE,
                        defaultFPS: 1
                    }
                    const _open = setInterval(() => {

                        this.changeToTransparentBackground();

                        this.transition.width = this.window.w;
                        this.transition.height = this.window.h;
                        const ctx = this.transition.getContext("2d");
                        ctx.beginPath();
                        ctx.fillStyle = VALUES.COLORS.BLACK;
                        ctx.moveTo(VALUES.WINDOW.WIDTH, dataTemporal.RIGHT);
                        ctx.lineTo(VALUES.WINDOW.MIN, VALUES.WINDOW.HEIGHT);
                        ctx.lineTo(VALUES.WINDOW.WIDTH, VALUES.WINDOW.HEIGHT);
                        ctx.fill();
                        ctx.fillStyle = VALUES.COLORS.BLACK
                        ctx.moveTo(VALUES.WINDOW.MIN, VALUES.WINDOW.MIN);
                        ctx.lineTo(VALUES.WINDOW.MIN, dataTemporal.LEFT);
                        ctx.lineTo(VALUES.WINDOW.WIDTH, VALUES.WINDOW.MIN);
                        ctx.fill();
                        ctx.closePath();
                        ctx.stroke();
                        dataTemporal.LEFT += dataTemporal.defaultFPS;
                        dataTemporal.RIGHT -= dataTemporal.defaultFPS;

                        VALUES.SLEEP.forEach((item) => {
                            if (item.x <= dataTemporal.LEFT && item.y >= dataTemporal.RIGHT) {
                                dataTemporal.defaultFPS = VALUES.FPS + item.r;
                            }
                        })

                        if (dataTemporal.LEFT
                            >= VALUES.SIZE.MAX_MIN) {
                            clearInterval(_open);
                            resolve();
                        }
                    }, VALUES.SECONDS_INTERVAL);
                } catch (ex) {
                    reject(ex);
                }
            })
        }

        async open() {
            return new Promise((resolve, reject) => {
                try {
                    let dataTemporal = {
                        ...VALUES.SIZE.OPEN,
                        defaultFPS: 1
                    }
                    const _open = setInterval(() => {
                        this.changeToTransparentBackground();
                        this.transition.width = this.window.w;
                        this.transition.height = this.window.h;
                        const ctx = this.transition.getContext("2d");
                        ctx.beginPath();
                        ctx.fillStyle = VALUES.COLORS.BLACK;
                        ctx.moveTo(VALUES.WINDOW.WIDTH, dataTemporal.RIGHT);
                        ctx.lineTo(VALUES.WINDOW.MIN, VALUES.WINDOW.HEIGHT);
                        ctx.lineTo(VALUES.WINDOW.WIDTH, VALUES.WINDOW.HEIGHT);
                        ctx.fill();
                        ctx.fillStyle = VALUES.COLORS.BLACK;
                        ctx.moveTo(VALUES.WINDOW.MIN, VALUES.WINDOW.MIN);
                        ctx.lineTo(VALUES.WINDOW.MIN, dataTemporal.LEFT);
                        ctx.lineTo(VALUES.WINDOW.WIDTH, VALUES.WINDOW.MIN);
                        ctx.fill();
                        ctx.closePath();
                        ctx.stroke();
                        dataTemporal.LEFT -= dataTemporal.defaultFPS;
                        dataTemporal.RIGHT += dataTemporal.defaultFPS;

                        VALUES.SLEEP.forEach((item) => {
                            if (item.x <= dataTemporal.LEFT && item.y >= dataTemporal.RIGHT) {
                                dataTemporal.defaultFPS = VALUES.FPS + item.r;
                            }
                        })

                        if (dataTemporal.RIGHT >= VALUES.SIZE.MAX_MIN) {
                            clearInterval(_open);
                            resolve();
                        }
                    }, VALUES.SECONDS_INTERVAL);
                } catch (ex) {
                    reject(ex);
                }
            })
        }

        async sleep(data) {
            const time = data?.time || VALUES.SECONDS_SLEEP;
            const clicked = data?.clicked || false;
            return new Promise((resolve) => {
                let count = 0;
                const _sleep = setInterval(() => {
                    count++;
                    if (this.clicked && clicked) {
                        clearInterval(_sleep);
                        this.removeClicked();
                        resolve();
                    }
                    if (count >= time / 100) {
                        clearInterval(_sleep);
                        resolve();
                    }
                }, VALUES.SECONDS_INTERVAL);
            })
        }

        isBackgroundTransparent() {
            return this.isColor(VALUES.COLORS.TRANSPARENT);
        }

        isBackgroundBlack() {
            return this.isColor(VALUES.COLORS.BLACK);
        }

        isColor(color) {
            return this.transition.style.backgroundColor === color;
        }

        async syncChangeBackgroundImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    this.changeBackgroundImage(src);
                    resolve();
                }
                img.src = src;
            })
        }

        changeToBlackBackground() {
            this.changeBackgrundColor(VALUES.COLORS.BLACK);
        }

        changeToTransparentBackground() {
            this.changeBackgrundColor(VALUES.COLORS.TRANSPARENT);
        }

        changeToWhiteBackground() {
            this.changeBackgrundColor(VALUES.COLORS.WHITE);
        }

        changeBackgrundColor(color) {
            this.transition.style.backgroundColor = color;
        }

        removeBackgroundImage() {
            this.transition.style.backgroundImage = "";
        }

        changeBackgroundImage(image) {
            this.transition.style.backgroundImage = `url(${image})`;
        }

        addClicked() {
            this.clicked = true;
        }

        removeClicked() {
            this.clicked = false;
        }

        hide() {
            this.transition.style.display = "none";
        }

        show() {
            this.transition.style.display = "block";
        }
    }
    if (window.TransitionGunbound) {
        throw new LibraryExistException();
    }
    window.TransitionGunbound = TransitionGunbound;
})(window, document)