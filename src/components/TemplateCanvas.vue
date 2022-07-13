<template>
    <div class="template-canvas">
        <template v-if="hasLayout">
            <TemplateLayout />
        </template>
        <template v-if="hasComponent">
            <div class="component-container"></div>
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
            return this.canvasConfig.layout.length > 0
        },
    },
}
</script>

<style></style>
