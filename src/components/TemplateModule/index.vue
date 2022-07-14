<template>
    <div v-if="config.id" class="template-module" :style="containerStyle">
        <TemplateCanvas
            :config="config"
            :canvasConfig="config.canvasMap[config.rootCanvas]"
        />
    </div>
</template>

<script>
import TemplateCanvas from './TemplateCanvas.vue'
export default {
    name: 'TemplateModule',
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
    },
    data() {
        return {
            containerStyle: {},
        }
    },
    created() {
        if (this.config.id) {
            this.containerStyle = this.config.containerStyle || {
                position: 'relative',
                width: '100%',
                height: '100%',
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
