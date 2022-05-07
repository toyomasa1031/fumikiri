let 角度 = 90
pins.servoWritePin(AnalogPin.P1, 角度)
basic.forever(function () {
    basic.pause(3000)
    for (let index = 0; index < 90; index++) {
        角度 += -1
        pins.servoWritePin(AnalogPin.P1, 角度)
        basic.pause(10)
    }
    basic.pause(3000)
    for (let index = 0; index < 90; index++) {
        角度 += 1
        pins.servoWritePin(AnalogPin.P1, 角度)
        basic.pause(10)
    }
})
