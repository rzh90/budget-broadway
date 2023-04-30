<script>
    import "../app.css"
    import Nav from "$lib/Nav.svelte"
    import Footer from "$lib/Footer.svelte"
</script>

<Nav />
<main class="mx-auto max-w-screen-xl lg:pt-20 lg:px-6">
    <!-- wrapper -->
    <div class="mt-12 lg:mt-8">
        <slot></slot>
    </div>
</main>
<Footer />