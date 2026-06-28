"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComposerDecorator = createComposerDecorator;
const nestjs_grammy_constants_1 = require("../nestjs-grammy.constants");
function createComposerDecorator(method) {
    return (arg) => {
        return (_target, _propertyKey, descriptor) => {
            const metadata = {
                method,
                arg,
            };
            const previousValue = Reflect.getMetadata(nestjs_grammy_constants_1.COMPOSER_METADATA, descriptor.value) || [];
            const value = [...previousValue, metadata];
            Reflect.defineMetadata(nestjs_grammy_constants_1.COMPOSER_METADATA, value, descriptor.value);
        };
    };
}
//# sourceMappingURL=create-composer-decorator.util.js.map