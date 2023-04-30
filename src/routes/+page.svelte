<script>
    import supabase from "$lib/supabaseClient"
    import { flip } from "svelte/animate"
    
    import PageTitle from "$lib/PageTitle.svelte"
    import SortButton from "$lib/SortButton.svelte"
    import ShowCard from "$lib/ShowCard.svelte"

    export let data
    let {shows} = data
    $: ({shows} = data)

    let error = null

    async function getShows(orderBy, ascending) {
        const {data, err} = await supabase
                .from("shows")
                .select()
                .order(orderBy, {ascending})

        if(err) {
            error = err
            console.log(error)
        }
        if(data) {
            shows = data
            shows = shows.filter(show => show.name !== null)
        }
    }
</script>

<PageTitle title="Get Tickets">Click on a link to get discounted tickets for a Broadway show</PageTitle>

<section class="mt-8 mb-8 items-center flex gap-2 text-sm">
    <span>Sort by: </span>
    <SortButton on:click={() => getShows("name", true)}>Show &#8593;</SortButton>
    <SortButton on:click={() => getShows("name", false)}>Show &#8595;</SortButton>
    <SortButton on:click={() => getShows("location", true)}>Location</SortButton>
</section>

<section class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
    {#each shows as show (show.id)}
    <div animate:flip={{duration: 500}}>
        {#if show.name}
            <ShowCard {show} />
        {/if}
    </div>
    {/each}
</section>