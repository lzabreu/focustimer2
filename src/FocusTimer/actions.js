import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
	state.isRunning = document.documentElement.classList.toggle('running')
	timer.countDown()
	sounds.buttonPressAudio.play()
}
export function reset() {
	state.isRunning = false
	document.documentElement.classList.remove('running')
	state.minutes = 25
	timer.updateDisplay()
	sounds.buttonPressAudio.play()
}
export function plusFive() {
	if ((state.minutes + 5) > 60){
		state.minutes = 60
		return
	}
	state.minutes += 5
	timer.updateDisplay()
}
export function minusFive() {
	if ((state.minutes - 5) <= 0) {
		state.minutes = 0
		return
	}
	state.minutes -= 5
	timer.updateDisplay()
}
export function SoundForest() {
	state.isMute = document.documentElement.classList.toggle('music-on')
	document.getElementById('SoundForest').classList.toggle('music-on')
	if (state.isMute) {
		sounds.forestSound.play()
		return
	}
	sounds.forestSound.pause()
}
export function SoundRain() {
	state.isMute = document.documentElement.classList.toggle('music-on')
	document.getElementById('SoundRain').classList.toggle('music-on')
	if (state.isMute) {
		sounds.rainSound.play()
		return
	}
	sounds.rainSound.pause()
}
export function SoundCoffee() {
	document.getElementById('SoundCoffee').classList.toggle('music-on')
	state.isMute = document.documentElement.classList.toggle('music-on')
	if (state.isMute) {
		sounds.coffeeSound.play()
		return
	}
	sounds.coffeeSound.pause()
}
export function SoundFire() {
	document.getElementById('SoundFire').classList.toggle('music-on')
	state.isMute = document.documentElement.classList.toggle('music-on')
	if (state.isMute) {
		sounds.fireSound.play()
		return
	}
	sounds.fireSound.pause()
}
