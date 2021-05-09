function createWebpage() {

	// YOU CAN MODIFY THE STUFF BELOW
	const staff_roles = [
		["host", "#271C1C", []],
		["admin", "#A64D79", []],
		["sheeter", "#E69138", []],
		["pooler", "#3C78D8", []],
		["referee", "#6AA84F", []],
		["streamer", "#CC0000", []],
		["commentator", "#BF9000", []],
		["playtester", "#3D85C6", []]
	]

	const users = [
		{
			"username": "Orange_", "id": "14272323", "country": "US",
			"roles": [
				"host",
				"admin"
			]
		},
		{
			"username": "rock-on", "id": "9676089", "country": "VN",
			"roles": [
				"admin",
				"sheeter",
				"referee"
			]
		},
		{
			"username": "GaryWombo", "id": "11076988", "country": "CA",
			"roles": [
				"admin",
				"pooler"
			]
		},
		{
			"username": "YesImSatan", "id": "14373729", "country": "SK",
			"roles": [
				"streamer"
			]
		},
		{
			"username": "dahammer88", "id": "10733055", "country": "CA",
			"roles": [
				"referee",
				"pooler"
			]
		},
		{
			"username": "TipanLogic", "id": "11720624", "country": "RU",
			"roles": [
				"referee",
				"streamer"
			]
		},
		{
			"username": "unicornlover", "id": "13179722", "country": "AU",
			"roles": [
				"pooler",
				"referee",
				"commentator"
			]
		},
		{
			"username": "- Elias -", "id": "12865368", "country": "PH",
			"roles": [
				"referee",
				"streamer"
			]
		},
		{
			"username": "kirintili", "id": "9286008", "country": "ES",
			"roles": [
				"pooler",
				"commentator"
			]
		},
		{
			"username": "xSweeet", "id": "14279904", "country": "GT",
			"roles": [
				"referee"
			]
		},
		{
			"username": "L3XiCbh", "id": "14309415", "country": "CA",
			"roles": [
				"streamer",
				"commentator"
			]
		},
		{
			"username": "EL2G3", "id": "8616507", "country": "PH",
			"roles": [
				"commentator"
			]
		},
		{
			"username": "Geag", "id": "16052525", "country": "US",
			"roles": [
				"commentator"
			]
		},
		{
			"username": "Juztan", "id": "14272451", "country": "US",
			"roles": [
				"referee",
				"pooler",
				"streamer",
				"commentator"
			]
		},
		{
			"username": "easypeasy123", "id": "9946406", "country": "US",
			"roles": [
				"referee",
				"pooler"
			]
		},
		{
			"username": "willerkiller", "id": "13710647", "country": "US",
			"roles": [
				"referee",
				"commentator"
			]
		}
	]
	// YOU CAN MODIFY THE STUFF ABOVE

	for (let i = 0; i < users.length; i++) {
		for (let e = 0; e < users[i].roles.length; e++) {
			for (let o = 0; o < staff_roles.length; o++) {
				if (users[i].roles[e] == staff_roles[o][0]) {
					staff_roles[o][2].push(users[i])
					e = users[i].roles.length
				}
			}
		}
	}

	for (let i = 0; i < staff_roles.length; i++) {

		let group = document.createElement("div")
		group.className = "checkbox"

		let checkbox = document.createElement("input")
		checkbox.id = staff_roles[i][0]
		checkbox.setAttribute("type", "checkbox")
		checkbox.checked = true

		let checkbox_label = document.createElement("label")
		checkbox_label.setAttribute("for", staff_roles[i][0])
		checkbox_label.innerHTML = `${staff_roles[i][0]}s`

		group.appendChild(checkbox)
		group.appendChild(checkbox_label)
		document.getElementById("checkboxes").appendChild(group)

		for (let e = 0; e < staff_roles[i][2].length; e++) {
			let user = staff_roles[i][2][e]
			let user_image = `https://a.ppy.sh/${user.id}`
			let user_profile = `https://osu.ppy.sh/users/${user.id}`
			let user_flag = `https://osu.ppy.sh/images/flags/${user.country}.png`
			let user_roles = sortRoles(staff_roles, user.roles)

			let div = document.createElement("div")
			div.className = `user`

			let card = document.createElement("table")
			card.className = "card"

			let first_row = card.insertRow(-1)
			let pfp = first_row.insertCell(-1)
			pfp.rowSpan = 2
			pfp.innerHTML = `<img class="pfp" src=${user_image}>`

			let username = first_row.insertCell(-1)
			username.className = "username"
			username.innerHTML = user.username

			let roles = document.createElement("div") // Secondary roles container
			roles.className = "roles"

			for (let o = 0; o < user_roles.length; o++) {
				if (o == 0) { // Primary role

					let second_row = card.insertRow(-1)

					let below_username = second_row.insertCell(-1)
					below_username.className = "below_username"

					let flag = document.createElement("img")
					flag.className = "flag"
					flag.src = user_flag
					below_username.appendChild(flag)

					let primary_role = document.createElement("div")
					primary_role.className = "primary_role"
					primary_role.style.borderColor = user_roles[0][1]
					primary_role.innerHTML = user_roles[0][0]
					below_username.appendChild(primary_role)

				} else { // Secondary role

					let secondary_role = document.createElement("div")
					secondary_role.className = "secondary_role"
					secondary_role.style.borderColor = user_roles[o][1]
					secondary_role.style.backgroundColor = user_roles[o][1][1]
					secondary_role.innerHTML = user_roles[o][0]

					roles.appendChild(secondary_role)

				}
			}

			card.appendChild(roles)

			let profile_link = document.createElement("a")
			profile_link.innerHTML = "Visit Profile"
			profile_link.setAttribute("href", user_profile)
			profile_link.setAttribute("target", "_blank")
			card.appendChild(profile_link)

			div.appendChild(card)
			document.getElementById("center").appendChild(div)
		}

	}

	let footer = document.createElement("p")
	footer.innerHTML = `Webpage by <a href="https://github.com/TTTaevas" target="_blank">Taevas</a><br>
	With the ideas and help of <a href="https://github.com/AcezukyRO" target="_blank">rock-on</a> and <a href="https://github.com/lmnyx" target="_blank">Mikhail</a>`
	document.getElementById("center").appendChild(footer)
}

function sortRoles(staff_roles, user_roles) {
	let roles = []
	for (let i = 0; i < staff_roles.length; i++) {
		for (let e = 0; e < user_roles.length; e++) {
			if (staff_roles[i][0] == user_roles[e]) {
				roles.push([user_roles[e], staff_roles[i][1]])
			}
		}
	}
	return roles
}
