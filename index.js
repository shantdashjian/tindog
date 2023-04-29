import dogs from './data'
import Dog from './Dog'

let currentIndex = 0
const crossBtn = document.getElementById('cross-btn')
const heartBtn = document.getElementById('heart-btn')

render(currentDog())

function render(dog) {
	document.getElementById('dog').innerHTML = dog.getDogHtml()
}

crossBtn.addEventListener('click', () => swipe(false))
heartBtn.addEventListener('click', () => swipe(true))

function swipe(liked) {
	setSwiped(true);
	setLiked(liked);
	render(currentDog())
	disableButtons();
	setTimeout(() => {
		render(nextDog())
		enableButtons();
	}, 2000)
}

function currentDog() {
	return new Dog(dogs[currentIndex]);
}

function nextDog() {
	const lastIndex = dogs.length - 1
	currentIndex = (currentIndex == lastIndex) ? 0 : currentIndex + 1
	return currentDog()
}

function disableButtons() {
	crossBtn.disabled = true
	heartBtn.disabled = true
}

function enableButtons() {
	crossBtn.disabled = false
	heartBtn.disabled = false
}

function setSwiped(swiped) {
	dogs[currentIndex].hasBeenSwiped = swiped
}

function setLiked(liked) {
	dogs[currentIndex].hasBeenLiked = liked
}
