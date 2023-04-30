<script>
    export let show

    function getImageUrl(show) {
        return `${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
    }
</script>

<div class="items-center bg-gray-800 border border-gray-700 rounded-md flex">
    <img class="w-28 rounded-md" src={`playbills/${getImageUrl(show)}`} alt={show.name} />
    <div class="p-5 text-sm">
        <h2 class="text-base font-bold text-white">{show.name}</h2>
        <p>{show.location} Theater</p>
        <p>{show.address}</p>
        {#if show.closes}
            <p class="text-bbblue font-bold">Closes {show.closes.replaceAll("-", "/")}</p>
        {/if}
    </div>
</div>