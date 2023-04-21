import dogs from './data'
import Dog from './Dog'

let currentIndex = 0
const lastIndex = dogs.length - 1

render(new Dog(dogs[currentIndex]))

function nextDog() {
	currentIndex = currentIndex == lastIndex ? 0 : currentIndex + 1
	return new Dog(dogs[currentIndex])
}

function render(dog) {
	const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = dog
	const like = hasBeenLiked ? "" : "hidden"
	const nope = hasBeenSwiped && !hasBeenLiked ? "" : "hidden"

	document.getElementById('dog').innerHTML = `
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
	dogs[currentIndex].hasBeenSwiped = true
	dogs[currentIndex].hasBeenLiked = false
	render(new Dog(dogs[currentIndex]))
	setTimeout(() => render(nextDog()), 2000)
})

heartBtn.addEventListener('click', () => {
	dogs[currentIndex].hasBeenSwiped = true
	dogs[currentIndex].hasBeenLiked = true
	render(new Dog(dogs[currentIndex]))
	setTimeout(() => render(nextDog()), 2000)
})
