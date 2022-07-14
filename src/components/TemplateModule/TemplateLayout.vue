<template>
    <div class="template-layout" :style="style">
        <div
            v-if="editStatus.isActive"
            class="edit-boxer"
            :class="{
                selected: editStatus.selectElementId === layoutConfig.id,
            }"
        ></div>
        <div
            class="layout-block"
            v-for="canvas in layoutConfig.canvases"
            :key="canvas.id"
            :style="{
                flex: canvas.flex,
                width: layoutConfig.type === 'row' ? canvas.fixSpan : '100%',
                height:
                    layoutConfig.type === 'column' ? canvas.fixSpan : '100%',
            }"
        >
            <TemplateCanvas
                :canvasConfig="config.elementsMap[canvas.id]"
                :config="config"
                :editStatus="editStatus"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TemplateLayout',
    components: {
        TemplateCanvas: () => import('./TemplateCanvas.vue'),
    },
    props: {
        config: {
            type: Object,
            default: () => {
                return {}
            },
        },
        layoutConfig: {
            type: Object,
            default: () => {
                return {}
            },
        },
        editStatus: {
            type: Object,
        },
    },

    data() {
        return {
            style: {},
        }
    },
    created() {
        this.setFlexDirection()
    },
    methods: {
        setFlexDirection() {
            if (this.layoutConfig.type === 'column') {
                this.style['flex-direction'] = 'column'
            } else {
                this.style['flex-direction'] = 'row'
            }
        },
    },
}
</script>

<style lang="less" scoped>
.template-layout {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    /* padding: 1px; */
    box-sizing: border-box;

    .edit-boxer {
        &.selected {
            background: rgba(222, 255, 9, 0.215);
        }
    }
}
.layout-block {
    padding: 5px;
    box-sizing: border-box;
}
</style>
