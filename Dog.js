export default class Dog {
	constructor(data) {
		Object.assign(this, data)
	}

	getDogHtml() {
		const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
		const like = hasBeenLiked ? "" : "hidden"
		const nope = hasBeenSwiped && !hasBeenLiked ? "" : "hidden"

		return `
			<img class="dog-img" src="${avatar}" alt="${name}">
			<div class="dog-text flex">
				<p class="dog-text-name-age" >${name}, ${age}</p>
				<p class="dog-text-bio">${bio}</p>
			</div>
			<div class="like-nope-badges flex">
				<img class="badge" id="like-badge" src="images/badge-like.png" alt="like" ${like}>
				<img class="badge" id="nope-badge" src="images/badge-nope.png" alt="nope" ${nope}>
			</div>
		`
	}
}
