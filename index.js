import dogs from './data'
import Dog from './Dog'

let index = 0
const lastIndex = dogs.length - 1

render(new Dog(dogs[index]))

function nextDog() {
	index = index == lastIndex ? 0 : index + 1
	return new Dog(dogs[index])
}

function render(dog) {
	const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = dog
	const like = hasBeenLiked ? "" : "hidden"
	const nope = hasBeenSwiped && !hasBeenLiked ? "" : "hidden"

	const dogEl = document.getElementById('dog')
	dogEl.innerHTML = `
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

const crossBtn = document.getElementById('cross-btn')
const heartBtn = document.getElementById('heart-btn')

crossBtn.addEventListener('click', () => {
	dogs[index].hasBeenSwiped = true
	dogs[index].hasBeenLiked = false
	render(new Dog(dogs[index]))
	setTimeout(() => render(nextDog()), 3000)
})

heartBtn.addEventListener('click', () => {
	dogs[index].hasBeenSwiped = true
	dogs[index].hasBeenLiked = true
	render(new Dog(dogs[index]))
	setTimeout(() => render(nextDog()), 3000)
})
