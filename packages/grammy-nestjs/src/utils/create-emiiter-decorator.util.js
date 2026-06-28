"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBotDecorator = createBotDecorator;
const nestjs_grammy_constants_1 = require("../nestjs-grammy.constants");
function createBotDecorator(emitter, method) {
    return (search, ...args) => {
        return (_target, _propertyKey, descriptor) => {
            const newMethod = method || search;
            if (!newMethod) {
                throw new Error(`You must provide a method name or a search query for '${emitter}`);
            }
            const metadata = {
                method: newMethod,
                args,
                emitter,
            };
            const previousValue = Reflect.getMetadata(nestjs_grammy_constants_1.LISTENERS_METADATA, descriptor.value) || [];
            const value = [...previousValue, metadata];
            Reflect.defineMetadata(nestjs_grammy_constants_1.LISTENERS_METADATA, value, descriptor.value);
        };
    };
}
//# sourceMappingURL=create-emiiter-decorator.util.js.map