<template>
    <div class="unit-rich-text"></div>
</template>

<script>
export default {
    name: 'UnitRichText',
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
