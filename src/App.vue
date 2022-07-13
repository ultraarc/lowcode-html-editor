<template>
    <div id="app">
        <TemplateModuleEditor :container="container" :config="config" />
    </div>
</template>

<script>
import TemplateModuleEditor from './components/TemplateModuleEditor.vue'

export default {
    name: 'App',
    components: {
        TemplateModuleEditor,
    },
    data() {
        return {
            container: {
                width: '100%',
                height: '100%',
            },
            config: {
                id: '213213',
                containerStyle: {},
                canvas: {
                    components: ['component001'],
                    layouts: 'layout001',
                },
            },
            componentMap: {
                component001: {
                    template: '',
                    style: {},
                },
            },
            canvasMap: {},
            layoutMap: {
                layout001: {
                    type: 'vertical', // 横向 or 纵向
                    canvases: [],
                    config: '', // 配置项
                },
            },
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    height: 600px;
    width: 1200px;
}
</style>
