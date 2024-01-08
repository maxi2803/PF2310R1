class FlashLamp {
    status
    battery

    constructor(status, battery) {
        this.status = status
        this.battery = battery
    }

    setBattery(battery) {
        if (this.battery != undefined) {
            console.log("Đã có pin!");
        } else {
            this.battery = battery
        }
    }

    getBatteryInfo() {
        if (this.battery != undefined) {
            console.log(this.battery.getEnergy());
        } else {
            console.log("Lắp pin trước!");
        }  
    }

    light() {
        if (this.status) {
            console.log("Đèn đang sáng");
        } else {
            console.log("Đèn đang tắt");
        }
    }

    turnOn() {
        if (this.battery != undefined) {
            this.status = true
            this.battery.decreaseEnergy()
        } 
    }

    turnOff() {
        this.status = false
    }
}