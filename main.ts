radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(input.temperature())
})
radio.setGroup(107)
