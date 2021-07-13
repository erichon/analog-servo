basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 70)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(1000)
})
