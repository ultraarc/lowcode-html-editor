<template>
    <div id="app">
        <TemplateModuleEditor :container="container" :config="config" />
    </div>
</template>

<script>
import TemplateModuleEditor from './components/TemplateModuleEditor/index.vue'

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
                // containerStyle: {},
                rootCanvas: 'canvas001',
                elementsMap: {
                    component001: {
                        template: '',
                        style: {},
                    },

                    canvas001: {
                        id: 'canvas001',
                        components: ['component001'],
                        layout: 'layout001',
                        subCanvases: [],
                    },
                    canvas002: {
                        id: 'canvas002',
                        components: [],
                        parentId: 'layout001',
                        layout: '',
                        subCanvases: [],
                    },
                    canvas003: {
                        id: 'canvas003',
                        components: [],
                        parentId: 'layout001',
                        layout: '',
                        subCanvases: [],
                    },

                    layout001: {
                        id: 'layout001',
                        type: 'row', // 横向 or 纵向
                        canvases: [
                            { id: 'canvas002', flex: '2', fixSpan: '' },
                            { id: 'canvas003', flex: '1', fixSpan: '50px' },
                        ],
                        parentId: 'canvas001',
                        config: '', // 配置项
                    },
                },
            },
        }
    },
}
</script>

<style scoped>
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
