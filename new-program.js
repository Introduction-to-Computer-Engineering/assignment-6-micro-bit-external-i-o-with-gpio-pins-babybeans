/*This program flashes the three leds and then each of those
individual leds slowly light up and then fade out. */

led.enable(false) //disables led display

class LightUpLED {

    flash() {
        //lights up leds slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P0, index);
            pins.analogWritePin(AnalogPin.P2, index);
            pins.analogWritePin(AnalogPin.P3, index);
        }

        //fades out leds slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P0, index);
            pins.analogWritePin(AnalogPin.P2, index);
            pins.analogWritePin(AnalogPin.P3, index);
        }
    }

    eachLedLight() {
        //lights led connected to P0 slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P0, index);
            control.waitMicros(1000)
        }
        //fades led connected to P0 slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P0, index);

            control.waitMicros(1000)
        }
        //lights led connected to P2 slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P2, index)
            control.waitMicros(1000)
        }
        //fades led connected to P2 slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P2, index)
            control.waitMicros(1000)
        }
        //lights led connected to P3 slowly
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P3, index);
            control.waitMicros(1000)
        }
        //fades led connected to P3 slowly
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P3, index);
            control.waitMicros(1000)
        }
    }
}
basic.forever(function () {

    //set pins that will be used to 0
    pins.analogWritePin(AnalogPin.P0, 0);
    pins.analogWritePin(AnalogPin.P2, 0);
    pins.analogWritePin(AnalogPin.P3, 0);
    pins.analogWritePin(AnalogPin.P6, 0);

    //flashes the three leds
    let light = new LightUpLED;
    light.flash();//runs flash function
    light.eachLedLight();//runs eachLedLight function

})

