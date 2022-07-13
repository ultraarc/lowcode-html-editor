<template>
    <div class="template-module-editor" :style="{ width, height }">
        <div style="background: #ddd; flex: 1; width: 100%">
            布局树（可选中组件或画布）
        </div>
        <div style="background: #ccc; flex: 1; width: 100%">
            预览区（可选中组件或画布）
            <TemplateModule :config="config" />
        </div>
    </div>
</template>

<script>
import TemplateModule from './TemplateModule.vue'
export default {
    name: 'TemplateModuleEditor',
    components: {
        TemplateModule,
    },
    props: {
        container: {
            type: Object,
            default: () => {
                return {}
            },
        },
        config: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    data() {
        return {
            component: '',
        }
    },
    computed: {
        width() {
            return this.container.width || '100%'
        },
        height() {
            return this.container.height || '100%'
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template-module-editor {
    display: flex;
}
</style>
