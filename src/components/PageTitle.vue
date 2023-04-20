<template>
    <section class="text-center mb-6">
        <h2 class="text-3xl text-bbblue mb-2">{{ title }}</h2>
        <p><slot></slot></p>
    </section>
</template>

<script>
export default {
    props: ["title"]
}
</script>