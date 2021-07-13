let distance = 0
pins.servoWritePin(AnalogPin.P2, 15)
basic.pause(1000)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 20) {
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P2, 15)
        basic.pause(500)
    }
})
