function createWebpage() {

	// YOU CAN MODIFY THE STUFF BELOW
	const staff_roles = [
		["host", []],
		["admin", []],
		["sheeter", []],
		["pooler", []],
		["referee", []],
		["streamer", []],
		["commentator", []],
		["playtester", []]
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
			"username": "rocking-on", "id": "9676089", "country": "VN",
			"roles": [
				"admin",
				"sheeter",
				"pooler",
				"referee",
				"streamer",
				"commentator",
				"playtester"
			]
		},
		{
			"username": "rock-in", "id": "9676089", "country": "VN",
			"roles": [
				"playtester"
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
				if (users[i].roles[e] == staff_roles[o][0]) {staff_roles[o][1].push(users[i])}
			}
		}
	}

	for (let i = 0; i < users.length; i++) {
		let user = users[i]
		let user_image = `https://a.ppy.sh/${user.id}`
		let user_profile = `https://osu.ppy.sh/users/${user.id}`
		let user_flag = `https://osu.ppy.sh/images/flags/${user.country}.png`

		let div = document.createElement("div")
		div.id = i
		div.className = `user ${user.roles[0]}`

		let card = document.createElement("table")
		let card_tbdy = document.createElement("tbody")
		card.className = "card"

		card_tbdy.innerHTML = `<tr><th rowspan="2"><img class="pfp" src=${user_image}></th>
		<td class="username">${user.username}</td></tr>
		<tr><td class="below_username"><img class="flag" src="${user_flag}"><div class="primary_role">${user.roles[0]}</div></td></tr>`

		card.appendChild(card_tbdy)

		if (user.roles.length > 1) {

			let table = document.createElement("table")
			table.className = "roles"
			let row = table.insertRow(-1)

			let count = 0
			for (let e = 1; e < user.roles.length; e++) {
				count += user.roles[e].length
				if (count > 27) {
					row = table.insertRow(-1)
					count = 0 + user.roles[e].length
				}
				let cell = row.insertCell(-1)
				cell.innerHTML = `<div class="secondary_role">${user.roles[e]}</div></td></tr>`
			}

			card.appendChild(table)

		}

		div.appendChild(card)

		document.getElementById("center").appendChild(div)
	}
}
