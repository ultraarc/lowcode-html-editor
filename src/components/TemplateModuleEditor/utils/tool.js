export class Layout {
    constructor(option) {
        this.parentId = option.parentId
        this.id = `layout_${generateId()}`
        this.type = option.type || 'row'
        this.canvases = []
        for (let i = 0; i < 3; i++) {
            this.canvases.push(new Canvas())
        }
    }
}

export class Canvas {
    constructor(option) {
        this.id = `canvas_${generateId()}`
        this.components = []
        this.parentId = option.parentId
        this.layout = ''
        this.subCanvases = []
    }
}

// 生成随机id
function generateId(num) {
    let randomId = ''
    const baseStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < num; i++) {
        var index = Math.round(Math.random() * (baseStr.length - 1))
        randomId += baseStr.substring(index, index + 1)
    }
    return randomId
}
