input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    if (x > 0) {
        x += -1
    } else {
        x = 4
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    if (x < 4) {
        x += 1
    } else {
        x = 0
    }
})
let y = 0
let x = 0
x = 2
y = 2
let direction = 1
led.plot(x, y)
basic.forever(function () {
    led.unplot(x, y)
    y += direction
    if (y <= 0) {
        direction = 1
    } else if (y >= 4) {
        direction = -1
    }
    led.plot(x, y)
    basic.pause(500)
})
