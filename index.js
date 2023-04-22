import dogs from './data'
import Dog from './Dog'

let currentIndex = 0
const lastIndex = dogs.length - 1
const crossBtn = document.getElementById('cross-btn')
const heartBtn = document.getElementById('heart-btn')

render(new Dog(dogs[currentIndex]))

function render(dog) {
	document.getElementById('dog').innerHTML = dog.getDogHtml()
}

crossBtn.addEventListener('click', () => swipe(false))
heartBtn.addEventListener('click', () => swipe(true))

function swipe(liked) {
	dogs[currentIndex].hasBeenSwiped = true
	dogs[currentIndex].hasBeenLiked = liked
	render(new Dog(dogs[currentIndex]))
	crossBtn.disabled = true
	heartBtn.disabled = true
	setTimeout(() => {
		render(nextDog())
		crossBtn.disabled = false
		heartBtn.disabled = false
	}, 2000)
}

function nextDog() {
	currentIndex = (currentIndex == lastIndex) ? 0 : currentIndex + 1
	return new Dog(dogs[currentIndex])
}
