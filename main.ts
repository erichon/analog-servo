basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 15)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(2000)
})
