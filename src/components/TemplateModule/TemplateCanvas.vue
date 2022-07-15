<template>
    <div
        class="template-canvas"
        :class="{ 'edit-mode': editStatus.isActive }"
        :style="activeStyle"
        @click="canvasClick"
    >
        <div
            v-if="editStatus.isActive"
            class="edit-boxer"
            :class="{
                selected: editStatus.selectElementId === canvasConfig.id,
            }"
        ></div>

        <template v-if="hasLayout">
            <TemplateLayout
                :config="config"
                :layoutConfig="config.elementsMap[canvasConfig.layout]"
                :editStatus="editStatus"
            />
        </template>
        <template v-if="hasComponent">
            <div class="component-container"></div>
        </template>
        <template v-if="hasSubCanvas">
            <TemplateCanvas
                v-for="canvasId in canvasConfig.subCanvases"
                :key="canvasId"
                :config="config"
                :canvasConfig="config.elementsMap[canvasId]"
                :editStatus="editStatus"
            />
        </template>
    </div>
</template>

<script>
// const TemplateLayout = import('./TemplateLayout.vue')
import TemplateLayout from './TemplateLayout.vue'

export default {
    name: 'TemplateCanvas',
    components: {
        TemplateLayout,
    },
    props: {
        config: {
            type: Object,
            default: () => {
                return {}
            },
        },
        canvasConfig: {
            type: Object,
            default: () => {
                return {}
            },
        },
        editStatus: {
            type: Object,
            default: () => {
                return {
                    isActive: false,
                }
            },
        },
    },
    data() {
        return {
            style: {
                margin: 5,
            },
        }
    },
    computed: {
        hasComponent() {
            return this.canvasConfig.components.length > 0
        },
        hasLayout() {
            const layoutId = this.canvasConfig.layout
            return this.config.elementsMap[layoutId] !== undefined
        },
        hasSubCanvas() {
            return this.canvasConfig.subCanvases.length > 0
        },
        activeStyle() {
            let style = this.canvasConfig.style
            return style
        },
    },
    methods: {
        canvasClick(e) {
            if (this.editStatus.isActive) {
                e.stopPropagation()
                this.editStatus.selectElementId = this.canvasConfig.id
            }
        },
    },
}
</script>

<style lang="less" scoped>
.template-canvas {
    /* border: 1px rgb(48, 179, 245) dashed; */

    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    // margin: 5px;
    &.edit-mode {
        outline: 1px rgb(48, 179, 245) dashed;
    }
}

::v-deep .edit-boxer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    &.selected {
        background: rgba(9, 185, 255, 0.215);
    }
}
</style>
