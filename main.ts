let 角度 = 70
pins.servoWritePin(AnalogPin.P1, 角度)
basic.forever(function () {
    if (input.lightLevel() <= 10) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        for (let index = 0; index < 80; index++) {
            角度 += -1
            pins.servoWritePin(AnalogPin.P1, 角度)
            basic.pause(10)
        }
        basic.pause(500)
        for (let index = 0; index < 20; index++) {
            角度 += 4
            pins.servoWritePin(AnalogPin.P1, 角度)
            basic.pause(10)
        }
        basic.clearScreen()
    }
})
