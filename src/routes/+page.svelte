<script>
    import PageTitle from "$lib/PageTitle.svelte"
    import SortButton from "$lib/SortButton.svelte"
    import ShowCard from "$lib/ShowCard.svelte"

    export let data
    let {shows} = data
    $: ({shows} = data)
</script>

<PageTitle title="Get Tickets">Click on a link to get discounted tickets for a Broadway show</PageTitle>

<section class="mt-8 mb-8 items-center flex gap-2 text-sm">
    <span>Sort by: </span>
    <SortButton>Show &#8593;</SortButton>
    <SortButton>Show &#8595;</SortButton>
    <SortButton>Location</SortButton>
</section>

<section class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
    {#each shows as show}
        {#if show.name}
            <ShowCard {show}/>
        {/if}
    {/each}
</section>