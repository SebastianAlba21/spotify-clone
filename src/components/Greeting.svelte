<script lang="js">
	const curremtTime = new Date()
	const currentHour = curremtTime.getHours()

	let greeting = ''

	if (currentHour < 12) {
		greeting = 'Good morning'
	} else if (currentHour < 18) {
		greeting = 'Good afternoon'
	} else {
		greeting = 'Good evening'
	}
</script>

<h1 class="text-3xl font-bold select-none">{greeting}</h1>
