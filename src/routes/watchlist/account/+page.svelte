<script>
	export let data
	let { session, profile } = data
    let email = session.user.email
</script>

<section class="mt-8 mb-8 items-center flex gap-2 text-sm">
    <p>{email}</p>
    <form method="post" action="?/signout">
        (<button class="text-bbblue hover:text-bblightblue">Sign out</button>)
    </form>
</section>