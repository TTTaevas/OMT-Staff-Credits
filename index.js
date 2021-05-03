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
		["replayer", []]
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

		if (i == 0) {div.className += " first"}
		if (i == users.length - 1) {div.className += " last"}

		let head_of_card = document.createElement("table")
		let hb_tbdy = document.createElement("tbody")
		head_of_card.className = "card_head"
		head_of_card.onclick = function() {
			let cards = document.getElementsByClassName("card_body")
			for (let a = 0; a < cards.length; a++) {
				a == i ? cards[a].style.display == "none" ? cards[a].style.display = "inline-block" : cards[a].style.display = "none" : cards[a].style.display = "none"
			}
		}

		hb_tbdy.innerHTML = `<tr><th rowspan="2"><img class="pfp" src=${user_image}></th>
		<td class="username">${user.username}</td></tr>
		<tr><td class="flag_holder"><img class="flag" src="${user_flag}"><div class="primary_role">${user.roles[0]}</div></td></tr>`
		head_of_card.appendChild(hb_tbdy)

		let body_of_card = document.createElement("table")
		let cb_tbdy = document.createElement("tbody")
		body_of_card.className = "card_body"
		body_of_card.style.display = "none"

		for (let e = 0; e < user.roles.length; e++) {
			cb_tbdy.innerHTML += `<tr><td class="role">${user.roles[e]}</td></tr>`
		}

		cb_tbdy.innerHTML += `<tr><th><a href="${user_profile}" target="_blank">Profile link</th></tr>`
		body_of_card.appendChild(cb_tbdy)

		head_of_card.appendChild(body_of_card)
		div.appendChild(head_of_card)

		document.getElementById("center").appendChild(div)
	}
}
