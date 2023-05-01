<script>
    import "../app.css"
    import Nav from "$lib/Nav.svelte"
    import Footer from "$lib/Footer.svelte"

    import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

    export let data

	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<Nav />
<main class="mx-auto max-w-screen-xl lg:pt-20 lg:px-6">
    <!-- wrapper -->
    <div class="mt-12 lg:mt-8">
        <slot />
    </div>
</main>
<Footer />