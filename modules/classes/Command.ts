export {}

// let Command = function (this: any,
//                         condition: Function,
//                         action: Function,
//                         description = ". . ."
// ) {
//     this.condition = condition
//     this.action = action
//     this.description = description
// }

interface ConstructorParams {
    condition: Function;
    action: Function;
    description: string;
}

// module.exports = Command
export default class Command {
//     condition() {
//         return false;
//     }
    public condition: Function;
    public action: Function;
    public description: string;
    constructor(
        // this: any,
        {condition, action, description=". . ."}: ConstructorParams
    ) {
        this.condition = condition
        this.action = action
        this.description = description
    }
}