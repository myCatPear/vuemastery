<template>
    <div>
        HomePage
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('mounted')
    },
    unmounted() {
        console.log('unmounted')
    },
    activated() {
        console.log('activated')

    },
    deactivated() {
        console.log('deactivated')

    }
}
</script>

<style scoped></style>