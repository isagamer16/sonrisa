input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("sonrisa")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendValue("name", 0)
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Sad)
})
radio.setGroup(17)
