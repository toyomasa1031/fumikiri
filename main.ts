let 角度１ = 70
let 角度２ = 70
pins.servoWritePin(AnalogPin.P1, 角度１)
pins.servoWritePin(AnalogPin.P2, 角度２)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        for (let index = 0; index < 80; index++) {
            角度１ += -1
            pins.servoWritePin(AnalogPin.P1, 角度１)
            basic.pause(10)
        }
        basic.pause(200)
        for (let index = 0; index < 20; index++) {
            角度１ += 4
            pins.servoWritePin(AnalogPin.P1, 角度１)
            basic.pause(10)
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        for (let index = 0; index < 80; index++) {
            角度２ += -1
            pins.servoWritePin(AnalogPin.P2, 角度２)
            basic.pause(10)
        }
        basic.pause(200)
        for (let index = 0; index < 20; index++) {
            角度２ += 4
            pins.servoWritePin(AnalogPin.P2, 角度２)
            basic.pause(10)
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Happy)
        for (let index = 0; index < 80; index++) {
            角度２ += -1
            pins.servoWritePin(AnalogPin.P2, 角度２)
            basic.pause(10)
            角度１ += -1
            pins.servoWritePin(AnalogPin.P1, 角度１)
            basic.pause(10)
        }
        for (let index = 0; index < 20; index++) {
            角度２ += 4
            pins.servoWritePin(AnalogPin.P2, 角度２)
            basic.pause(10)
            角度１ += 4
            pins.servoWritePin(AnalogPin.P1, 角度１)
            basic.pause(10)
        }
        basic.clearScreen()
    }
})
