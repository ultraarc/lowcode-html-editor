<template>
    <div class="unit-image" @click="clickHandler">
        <img v-if="isShowImage" :src="url" />
    </div>
</template>

<script>
export default {
    name: 'UnitImage',
    props: {
        url: {
            type: String,
            default: '',
        },
        isShowImage: {
            type: Boolean,
            default: true,
        },
        style: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    methods: {
        clickHandler() {},
    },
}
</script>

<style></style>
