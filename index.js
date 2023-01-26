let num = 0
let type = document.getElementById("type")
let length = document.getElementById("length")
let mass = document.getElementById("mass")
let volume = document.getElementById("volume")

function pEnter() {
  num = type.value;
  convertToMeter()
  convertToLitre()
  convertToKilo()
}
function convertToMeter() {
  let meters = (num * 0.304785).toFixed(2)
  let feets = (num*3.281).toFixed(2)
  length.textContent = `${num} meters = ${feets} feet | ${num} feet = ${meters} meter`
}
function convertToLitre() {
  let liter = (num*0.264).toFixed(2)
  let gallon = (num*3.7878).toFixed(2)
  volume.textContent = `${num} litre = ${gallon} gallon | ${num} gallon = ${liter} litre`
}
function convertToKilo() {
  let pound = (num*2.204).toFixed(2)
  let kilo = (num*0.45372).toFixed(2)
  mass.textContent =  `${num} kilo= ${pound} pound | ${num} pound= ${kilo} pound`
}