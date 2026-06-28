"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = Sender;
const param_decorator_util_1 = require("../../utils/param-decorator.util");
const grammy_paramtype_enum_1 = require("../../enums/grammy-paramtype.enum");
function Sender(property, ...pipes) {
    return (0, param_decorator_util_1.createGrammyPipesParamDecorator)(grammy_paramtype_enum_1.GrammyParamtype.SENDER)(property, ...pipes);
}
//# sourceMappingURL=sender.decorator.js.map