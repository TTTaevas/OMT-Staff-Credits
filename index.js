function createWebpage() {

	// YOU CAN MODIFY THE STUFF BELOW
	const staff_roles = [
		["host", ["#FFCC66", "#271C1C"], []],
		["admin", ["#FFCC66", "#271C1C"], []],
		["sheeter", ["#FFCC66", "#271C1C"], []],
		["pooler", ["#FFCC66", "#271C1C"], []],
		["referee", ["#FFCC66", "#271C1C"], []],
		["streamer", ["#FFCC66", "#271C1C"], []],
		["commentator", ["#FFCC66", "#271C1C"], []],
		["playtester", ["#FFCC66", "#271C1C"], []]
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
			"username": "dahammer88", "id": "10733055", "country": "CA",
			"roles": [
				"referee",
				"pooler"
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
				"playtester"
			]
		},
		{
			"username": "- Elias -", "id": "12865368", "country": "PH",
			"roles": [
				"referee",
				"streamer"
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
		for (let e = 0; e < staff_roles[i][2].length; e++) {
			let user = staff_roles[i][2][e]
			let user_image = `https://a.ppy.sh/${user.id}`
			let user_profile = `https://osu.ppy.sh/users/${user.id}`
			let user_flag = `https://osu.ppy.sh/images/flags/${user.country}.png`
			let user_roles = sortRoles(staff_roles, user.roles)

			let div = document.createElement("div")
			div.className = `user ${user_roles[0][0]}`

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
					primary_role.style.color = user_roles[0][1][0]
					primary_role.style.backgroundColor = user_roles[0][1][1]
					primary_role.innerHTML = user_roles[0][0]
					below_username.appendChild(primary_role)

				} else { // Secondary role

					let secondary_role = document.createElement("div")
					secondary_role.className = "secondary_role"
					secondary_role.style.color = user_roles[o][1][0]
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
