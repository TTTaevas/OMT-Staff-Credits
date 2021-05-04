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
			div.className = `user ${user.roles[0]}`

			let card = document.createElement("table")
			let card_tbdy = document.createElement("tbody")
			card.className = "card"

			card_tbdy.innerHTML = `<tr><th rowspan="2"><img class="pfp" src=${user_image}></th>
			<td class="username">${user.username}</td></tr>
			<tr><td class="below_username"><img class="flag" src="${user_flag}"><div class="primary_role">${user_roles[0]}</div></td></tr>`

			card.appendChild(card_tbdy)

			if (user.roles.length > 1) {

				let table = document.createElement("table")
				table.className = "roles"
				let row = table.insertRow(-1)

				let count = 0
				for (let o = 1; o < user_roles.length; o++) {
					count += user_roles[o].length
					if (count > 27) {
						row = table.insertRow(-1)
						count = 0 + user.roles[o].length
					}
					let cell = row.insertCell(-1)
					cell.innerHTML = `<div class="secondary_role">${user_roles[o]}</div></td></tr>`	
				}

				card.appendChild(table)

			}

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
				roles.push(user_roles[e])
			}
		}
	}
	return roles
}
