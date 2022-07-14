<template>
    <div class="template-canvas">
        <template v-if="hasLayout">
            <TemplateLayout
                :config="config"
                :layoutConfig="config.layoutMap[canvasConfig.layout]"
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
                :canvasConfig="config.canvasMap[canvasId]"
            />
        </template>
    </div>
</template>

<script>
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
    },
    computed: {
        hasComponent() {
            return this.canvasConfig.components.length > 0
        },
        hasLayout() {
            const layoutId = this.canvasConfig.layout
            return this.config.layoutMap[layoutId] !== undefined
        },
        hasSubCanvas() {
            return this.canvasConfig.subCanvases.length > 0
        },
    },
}
</script>

<style>
.template-canvas {
    border: 1px rgb(48, 179, 245) dashed;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
}
</style>
