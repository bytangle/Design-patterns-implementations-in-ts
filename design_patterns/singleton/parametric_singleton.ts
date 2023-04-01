export class ParametricSingleton {
    private param !: any;

    private static instances = new Map <string, ParametricSingleton> ()

    static getInstance(param : string) {
        if(!this.instances.has(param)) {
            this.instances.set(param, new ParametricSingleton(param))
        }

        return this.instances.get(param);
    }

    private constructor(param : string) { this.param = param }
}
