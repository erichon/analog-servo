distance = 0
pins.servo_write_pin(AnalogPin.P2, 15)
basic.pause(1000)

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS)
    if distance < 20:
        pins.servo_write_pin(AnalogPin.P2, 180)
        basic.pause(1000)
    else:
        pins.servo_write_pin(AnalogPin.P2, 15)
        basic.pause(500)
basic.forever(on_forever)
