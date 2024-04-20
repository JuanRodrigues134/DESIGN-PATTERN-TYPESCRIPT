import { DeviceImplementation } from "./device-implementation";

export class Radio implements DeviceImplementation {
    private volume: number = 10;
    private power: boolean = false;
    private name: string = 'Radio';

    getName(): string {
        return this.name;
    }
    setPower(powerStatus: boolean): void {
        this.power = powerStatus;
    }
    getPower(): boolean {
        return this.power;
    }
    setVolume(volume: number): void {
        if(volume < 0 || volume > 100) return;
        this.volume = volume
    }
    getVolume(): number {
        return this.volume;
    }

}