input.onButtonPressed(Button.A, function () {
    suma = numero1 + numero2
    basic.showNumber(suma)
    texto = "Sumaste"
})
input.onButtonPressed(Button.AB, function () {
    multiplicacion = numero1 * numero2
    basic.showNumber(multiplicacion)
    texto = "Multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    resta = numero1 - numero2
    basic.showNumber(resta)
    texto = "Restaste"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(numero1)
    basic.showNumber(numero2)
    basic.showString(texto)
})
let texto = ""
let multiplicacion = 0
let resta = 0
let suma = 0
let numero2 = 0
let numero1 = 0
numero1 = randint(1, 5)
numero2 = randint(1, 5)
suma = 0
resta = 0
multiplicacion = 0
texto = ""
basic.forever(function () {
	
})
