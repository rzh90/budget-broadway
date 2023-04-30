<script>
    import { page } from "$app/stores"
    import PageTitle from "$lib/PageTitle.svelte"
</script>

<div class="error">
    <PageTitle title="Oops">{$page.error.message}</PageTitle>
    <a href="/" class="text-bbblue hover:text-bblightblue">Back to home page</a>
</div>

<style>
    .error {
        text-align: center;
        margin-bottom: 60px;
    }
</style>