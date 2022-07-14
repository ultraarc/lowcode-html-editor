<template>
    <div class="template-layout" :style="style">
        <TemplateCanvas
            v-for="canvasId in layoutConfig.canvases"
            :key="canvasId"
            :canvasConfig="config.canvasMap[canvasId]"
            :config="config"
        />
    </div>
</template>

<script>
import TemplateCanvas from './TemplateCanvas.vue'
export default {
    name: 'TemplateLayout',
    components: {
        TemplateCanvas,
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

<style></style>
