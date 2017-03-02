class ComponentData {
    constructor(name, dispatcher) {
        if(typeof name !== "string") throw new Error("ComponentData needs a name");
        if(typeof dispatcher !== "function") throw new Error("ComponentData needs a dispatcher");
        this.name = name;
        this.dispatcher = dispatcher;
    }

    setComponent(variables = {}) {
        Object.keys(variables).forEach((key) => { this[key] = variables[key]; });
        let clone = Object.assign(new ComponentData(this.name, this.dispatcher), this);
        this.dispatcher({
            type: `SET_COMPONENT`,
            payload: {
                data: clone,
                name: this.name
            }
        });
    }
}
export default ComponentData;