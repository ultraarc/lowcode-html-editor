<template>
    <div class="unit-html"></div>
</template>

<script>
export default {
    name: 'UnitHtml',
    props: {
        // TODO: 使用template/render方法渲染，分析一下哪个合适
        template: {
            type: String,
            default: '',
        },
    },
}
</script>

<style></style>
