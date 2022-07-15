<template>
    <div class="structure-tree">
        <el-tree></el-tree>
    </div>
</template>

<script>
export default {
    name: 'StructureTree',
    props: {
        config: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    mounted() {
        console.log('structure-tree', this.config)
    },
    computed: {},
}
</script>

<style></style>
