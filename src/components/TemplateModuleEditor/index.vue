<template>
    <div class="template-module-editor" :style="{ width, height }">
        <div style="background: #ddd; flex: 1; width: 100%">
            布局树（可选中组件或画布）
        </div>
        <div>
            <h2>工具区</h2>
            <div>当前选中元素：画布001</div>
            <button @click="selectParentElement">选择父布局</button>
            <button @click="selectChildLayout">选中子布局</button>
            <button @click="addChildLayout">添加子布局</button>
            <button @click="addChildLayout">添加游离子画布</button>
            <button @click="addChildLayout">转换为游离画布</button>
            <button @click="addChildLayout">插入到指定布局</button>

            <button>删除当前元素</button>

            <button>编辑当前布局</button>
            <button>画布样式编辑</button>
        </div>
        <div
            class="preview-zone"
            style="background: #eee; flex: 1; width: 100%"
        >
            <div>预览区（可选中组件或画布）</div>
            <div class="preview-container">
                <TemplateModule
                    :config="config"
                    mode="edit"
                    ref="template-module"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TemplateModule from '../TemplateModule'
import { Layout } from './utils/tool'
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
    created() {},
    computed: {
        width() {
            return this.container.width || '100%'
        },
        height() {
            return this.container.height || '100%'
        },
    },
    methods: {
        selectParentElement() {
            const editStatus = this.$refs['template-module'].editStatus
            const currentId = editStatus.selectElementId

            editStatus.selectElementId =
                this.config.elementsMap[currentId].parentId
        },
        selectChildLayout() {
            const editStatus = this.$refs['template-module'].editStatus
            const currentId = editStatus.selectElementId

            const childLayout = this.config.elementsMap[currentId].layout
            if (childLayout) {
                editStatus.selectElementId = childLayout
            }
        },
        addChildLayout() {
            const editStatus = this.$refs['template-module'].editStatus
            const currentId = editStatus.selectElementId
            const layout = new Layout({
                parentId: currentId,
            })
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template-module-editor {
    display: flex;
}

.preview-zone {
    position: relative;
    display: flex;
    flex-direction: column;
}
.preview-container {
    padding: 10px;
    flex: 1;
}
</style>
