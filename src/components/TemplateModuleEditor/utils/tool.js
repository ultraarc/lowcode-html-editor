import Vue from 'vue'

export class Element {
    constructor(option) {
        this.config = option.config
    }
    addToElementMap() {
        Vue.set(this.config.elementsMap, this.id, this)
    }
}

export class Layout extends Element {
    constructor(option) {
        super(option)

        this.id = `layout_${generateId()}`
        this.type = option.type || 'row' // 候选值：column / row
        this.canvases = []
        this.style = {}

        this.addToElementMap()
        this.appendToCanvas(option.parentId)
        this.initLayoutCanvas()
    }

    appendToCanvas(canvasId) {
        this.parentId = canvasId
        this.config.elementsMap[canvasId].layout = this.id
    }

    /**
     * 初始化布局下的默认画布
     */
    initLayoutCanvas() {
        for (let i = 0; i < 3; i++) {
            let canvas = new Canvas({
                vueInstance: this.vueInstance,
                config: this.config,
            })
            canvas.appendToLayout(this.id)
        }
    }
}

export class Canvas extends Element {
    constructor(option) {
        super(option)

        this.id = `canvas_${generateId()}`
        this.components = []
        this.layout = ''
        this.subCanvases = []
        this.style = {}

        this.addToElementMap()
    }

    // 将当前画布设置为指定布局的子画布
    appendToLayout(layoutId) {
        this.parentId = layoutId
        const layout = this.config.elementsMap[layoutId]
        layout.canvases.push({ id: this.id, flex: '1', fixSpan: '' })
    }

    // 将当前画布设置为指定画布的游离子画布
    appendToCanvasAsAbsolute(canvasId) {
        this.parentId = canvasId
        const canvas = this.config.elementsMap[canvasId]
        canvas.subCanvases.push(this.id)

        // 如果没有足够的样式，添加绝对定位画布的基础默认样式
        this.setDefaultStyleForAbsoluteCanvas()
    }

    setDefaultStyleForAbsoluteCanvas() {
        const style = this.style
        if (!style.width) {
            style.width = '50%'
        }
        if (!style.height) {
            style.height = '50%'
        }
        style.position = 'absolute'
        if (!style.top) {
            style.top = '0px'
        }
        if (!style.left) {
            style.left = '0px'
        }
    }
}

/**
 * 生成指定长度的随机ID
 * @param {*} num ID长度
 * @returns
 */
function generateId(num = 10) {
    let randomId = ''
    const baseStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < num; i++) {
        var index = Math.round(Math.random() * (baseStr.length - 1))
        randomId += baseStr.substring(index, index + 1)
    }
    return randomId
}
