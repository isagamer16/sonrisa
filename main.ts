input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("sonrisa")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(17)
