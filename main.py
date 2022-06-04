角度 = 70
pins.servo_write_pin(AnalogPin.P1, 角度)

def on_forever():
    global 角度
    if input.light_level() <= 10:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(500)
        for index in range(80):
            角度 += -1
            pins.servo_write_pin(AnalogPin.P1, 角度)
            basic.pause(10)
        basic.pause(500)
        for index2 in range(20):
            角度 += 4
            pins.servo_write_pin(AnalogPin.P1, 角度)
            basic.pause(10)
        basic.clear_screen()
basic.forever(on_forever)
