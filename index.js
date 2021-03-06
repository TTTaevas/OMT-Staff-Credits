function createWebpage() {

	// YOU CAN MODIFY THE STUFF BELOW
	const roles = [ // THE VALUE OF "users" MUST BE AN EMPTY ARRAY
		{"name": "host", "color": "#271C1C", "users": []},
		{"name": "admin", "color": "#800080", "users": []},
		{"name": "sheeter", "color": "#E69138", "users": []},
		{"name": "GFX", "color": "#FFC0CB", "users": []},
		{"name": "pooler", "color": "#3C78D8", "users": []},
		{"name": "referee", "color": "#6AA84F", "users": []},
		{"name": "streamer", "color": "#CC0000", "users": []},
		{"name": "commentator", "color": "#BF9000", "users": []},
		{"name": "playtester", "color": "#3D85C6", "users": []}
	]

	let users = [
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
				"referee",
				"commentator"
			]
		},
		{
			"username": "dahammer88", "id": "10733055", "country": "CA",
			"roles": [
				"referee",
				"pooler",
				"playtester"
			]
		},
		{
			"username": "TipanLogic", "id": "11720624", "country": "RU",
			"roles": [
				"streamer",
				"referee",
				"playtester"
			]
		},
		{
			"username": "unicornlover", "id": "13179722", "country": "AU",
			"roles": [
				"pooler",
				"referee",
				"commentator",
				"playtester"
			]
		},
		{
			"username": "- Elias -", "id": "12865368", "country": "PH",
			"roles": [
				"streamer",
				"referee",
				"playtester"
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
				"commentator",
				"playtester"
			]
		},
		{
			"username": "Geag", "id": "16052525", "country": "US",
			"roles": [
				"commentator",
				"playtester"
			]
		},
		{
			"username": "_webis", "id": "19157442", "country": "PL",
			"roles": [
				"pooler",
				"referee",
				"commentator",
				"playtester"
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
				"pooler",
				"referee",
				"sheeter"
			]
		},
		{
			"username": "willerkiller", "id": "13710647", "country": "US",
			"roles": [
				"commentator",
				"referee"
			]
		},
		{
			"username": "cg505", "id": "11634481", "country": "US",
			"roles": [
				"referee"
			]
		},
		{
			"username": "Vincent A", "id": "11050632", "country": "ID",
			"roles": [
				"admin",
				"pooler",
				"sheeter",
				"commentator"
			]
		},
		{
			"username": "GarciXD", "id": "13398045", "country": "CL",
			"roles": [
				"referee"
			]
		},
		{
			"username": "MentalMoose", "id": "14262486", "country": "BE",
			"roles": [
				"commentator",
				"playtester"
			]
		},
		{
			"username": "Pipuuko", "id": "8446047", "country": "US",
			"roles": [
				"pooler",
				"playtester"
			]
		},
		{
			"username": "Yhuan Debeste", "id": "18704162", "country": "PH",
			"roles": [
				"pooler",
				"referee"
			]
		},
		{
			"username": "Potato9756", "id": "13205755", "country": "CA",
			"roles": [
				"referee",
				"playtester"
			]
		},
		{
			"username": "DewaYoGamer", "id": "11665488", "country": "ID",
			"roles": [
				"referee"
			]
		},
		{
			"username": "Barack", "id": "9402889", "country": "CL",
			"roles": [
				"playtester",
				"referee"
			]
		},
		{
			"username": "hubbawubba", "id": "15910288", "country": "US",
			"roles": [
				"commentator",
				"playtester"
			]
		},
		{
			"username": "Rekunan", "id": "8203119", "country": "US",
			"roles": [
				"referee"
			]
		},
		{
			"username": "chels", "id": "13968504", "country": "CA",
			"roles": [
				"referee",
				"playtester"
			]
		},
		{
			"username": "Jinsoul", "id": "3552505", "country": "US",
			"roles": [
				"playtester"
			]
		},
		{
			"username": "Jon Naismith", "id": "4863866", "country": "PL",
			"roles": [
				"pooler",
				"commentator",
				"playtester"
			]
		},
		{
			"username": "nebuwua", "id": "14729352", "country": "US",
			"roles": [
				"referee",
				"GFX"
			]
		},
		{
			"username": "SakuyaMyAngel", "id": "12048072", "country": "VN",
			"roles": [
				"referee",
				"pooler",
				"playtester"
			]
		},
		{
			"username": "[-Asuna-]", "id": "15854893", "country": "MY",
			"roles": [
				"referee",
				"commentator"
			]
		}
	]
	// YOU CAN MODIFY THE STUFF ABOVE


	// CARD SORTING
	users.sort((a, b) => {
		return a.roles.length - b.roles.length
	}).reverse()

	for (let i = 0; i < users.length; i++) {
		for (let e = 0; e < roles.length; e++) {
			for (let o = 0; o < users[i].roles.length; o++) {
				if (users[i].roles[o] == roles[e].name) {
					roles[e].users.push(users[i])
					e = roles.length
					o = users[i].roles.length
				}
			}
		}
	}
	// CARD SORTING


	// STATS ADDING, PART 1/3
	let all_counter = document.createElement("p")
	all_counter.id = "all_counter"
	all_counter.innerHTML = `ALL: ${users.length}`
	document.getElementById("stats").appendChild(all_counter)
	// STATS ADDING, PART 1/3


	// CHECKBOXES ADDING, PART 1/3
	let show_button = document.createElement("div")
	show_button.className = "all_button"
	show_button.onclick = function() {
		check(document.getElementsByClassName('checkbox'))
		event.stopPropagation();
	}

	let show_button_label = document.createElement("label")
	show_button_label.innerHTML = `SHOW ALL`

	show_button.appendChild(show_button_label)
	document.getElementById("buttons").appendChild(show_button)
	// CHECKBOXES ADDING, PART 1/3


	for (let i = 0; i < roles.length; i++) {

		// STATS ADDING, PART 2/3
		let counter = document.createElement("p")
		counter.id = `${roles[i].name}_counter`
		counter.innerHTML = `${roles[i].name.toUpperCase()}S: 0`
		document.getElementById("stats").appendChild(counter)
		// STATS ADDING, PART 2/3


		// CHECKBOXES ADDING, PART 2/3
		let c_group = document.createElement("div")
		c_group.className = "checkbox"
		c_group.onclick = function() {
			if (this.firstElementChild.checked) {
				this.style.backgroundColor = ""
				this.style.color = ""
				this.lastElementChild.innerHTML = `${this.lastElementChild.htmlFor.toUpperCase()}S: SHOWN`
			} else {
				this.style.backgroundColor = "black"
				this.style.color = "#FFCC66"
				this.lastElementChild.innerHTML = `${this.lastElementChild.htmlFor.toUpperCase()}S: HIDDEN`
			}
			event.stopPropagation();
		}

		let c_checkbox = document.createElement("input")
		c_checkbox.id = roles[i].name
		c_checkbox.setAttribute("type", "checkbox")
		c_checkbox.checked = true

		let c_label = document.createElement("label")
		c_label.setAttribute("for", roles[i].name)
		c_label.innerHTML = `${roles[i].name.toUpperCase()}S: SHOWN`

		c_group.appendChild(c_checkbox)
		c_group.appendChild(c_label)
		document.getElementById("checkboxes").appendChild(c_group)
		// CHECKBOXES ADDING, PART 2/3


		// START CARD CREATION
		for (let e = 0; e < roles[i].users.length; e++) {

			// FONDATIONS
			let user = roles[i].users[e]
			let user_image = `https://a.ppy.sh/${user.id}`
			let user_profile = `https://osu.ppy.sh/users/${user.id}`
			let user_flag = `https://osu.ppy.sh/images/flags/${user.country}.png`
			let user_roles = sortRoles(roles, user.roles)

			let card_container = document.createElement("div")
			card_container.className = `card_container`

			let card = document.createElement("table")
			card.className = "card"
			// FONDATIONS


			// FIRST ROW
			let first_row = card.insertRow(-1)
			let pfp = first_row.insertCell(-1)
			pfp.rowSpan = 2
			pfp.innerHTML = `<img class="pfp" src=${user_image}>`

			let username = first_row.insertCell(-1)
			username.className = "username"
			username.innerHTML = user.username
			// FIRST ROW


			// SECOND ROW
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
			// SECOND ROW


			// SECONDARY ROLES
			if (user_roles.length > 1) {
				let roles_div = document.createElement("div") // Secondary roles container
				roles_div.className = "roles"

				for (let o = 1; o < user_roles.length; o++) {
					let secondary_role = document.createElement("div")
					secondary_role.className = "secondary_role"
					secondary_role.style.borderColor = user_roles[o][1]
					secondary_role.innerHTML = user_roles[o][0]
					roles_div.appendChild(secondary_role)
				}

				card.appendChild(roles_div)
			}
			// SECONDARY ROLES


			// PROFILE BUTTON
			let profile_link = document.createElement("a")
			profile_link.innerHTML = "Visit Profile"
			profile_link.setAttribute("href", user_profile)
			profile_link.setAttribute("target", "_blank")
			card.appendChild(profile_link)
			// PROFILE BUTTON


			// FINISH CARD CREATION
			card_container.appendChild(card)
			document.getElementById("center").appendChild(card_container)
			// FINISH CARD CREATION
			
		}
		// START CARD CREATION

	}


	// STATS ADDING, PART 3/3
	for (let i = 0; i < users.length; i++) {
		for (let e = 0; e < users[i].roles.length; e++) {
			let role = users[i].roles[e]
			let paragraph = document.getElementById(`${role}_counter`)
			paragraph.innerHTML = `${paragraph.innerHTML.slice(0, -2)} ${Number(paragraph.innerHTML.slice(-2)) + 1}`
		}
	}
	// STATS ADDING, PART 3/3


	// CHECKBOXES ADDING, PART 3/3
	let hide_button = document.createElement("div")
	hide_button.className = "all_button"
	hide_button.onclick = function() {
		uncheck(document.getElementsByClassName('checkbox'))
		event.stopPropagation();
	}

	let hide_button_label = document.createElement("label")
	hide_button_label.innerHTML = `HIDE ALL`

	hide_button.appendChild(hide_button_label)
	document.getElementById("buttons").appendChild(hide_button)
	// CHECKBOXES ADDING, PART 3/3


	// CREDITS
	let footer = document.createElement("p")
	footer.innerHTML = `Webpage by <a href="https://github.com/TTTaevas" target="_blank">Taevas</a><br>
	With the ideas and help of <a href="https://github.com/AcezukyRO" target="_blank">rock-on</a> and <a href="https://github.com/lmnyx" target="_blank">Mikhail</a>
	<br>Thank you for your support <3`
	document.getElementById("center").appendChild(footer)
	// CREDITS

}

function check(checkboxes) {
	for (let i = 0; i < checkboxes.length; i++) {
		if (!checkboxes[i].firstElementChild.checked) {checkboxes[i].lastElementChild.click()}
	}
}

function uncheck(checkboxes) {
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].firstElementChild.checked) {checkboxes[i].lastElementChild.click()}
	}
}


// SORTING ROLES OF A USER
function sortRoles(roles, user_roles) {
	let arr = []
	for (let i = 0; i < roles.length; i++) {
		for (let e = 0; e < user_roles.length; e++) {
			if (roles[i].name == user_roles[e]) {
				arr.push([user_roles[e], roles[i].color])
			}
		}
	}
	return arr
}
// SORTING ROLES OF A USER

console.log("Let's all love Lain!")
