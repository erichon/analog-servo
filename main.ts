basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 60)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 160)
    basic.pause(1000)
})
