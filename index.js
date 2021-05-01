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
		["replayer", []],
		["playtester", []]
	]

	const users = [
		{
			"username": "Orange_",
			"id": "14272323",
			"roles": [
				"host",
				"admin"
			]
		},
		{
			"username": "rock-on",
			"id": "9676089",
			"roles": [
				"admin",
				"sheeter",
				"referee"
			]
		},
		{
			"username": "dahammer88",
			"id": "10733055",
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

	for (let i = 0; i < staff_roles.length; i++) {
		let div = document.createElement("div")
		div.id = staff_roles[i][0]
		div.className = "staff_role"

		if (i == 0) {div.className += " first"}
		if (i == staff_roles.length - 1) {div.className += " last"}

		let div_heading = document.createElement("h2")
		div_heading.innerHTML = staff_roles[i][0]

		let members = staff_roles[i][1]

		if (members.length > 1) {div_heading.innerHTML += "s"}
		div.appendChild(div_heading)

		for (let e = 0; e < members.length; e++) {
			let member = document.createElement("div")
			member.className = "member"

			let member_image = `https://a.ppy.sh/${members[e].id}`
			let member_profile = `https://osu.ppy.sh/users/${members[e].id}`
			member.innerHTML = `<a href=${member_profile} target="_blank"><img src=${member_image}><span>${members[e].username}</span></a>`

			div.appendChild(member)
		}

		document.getElementById("center").appendChild(div)
	}
}
