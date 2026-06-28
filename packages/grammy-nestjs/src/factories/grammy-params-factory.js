"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrammyParamsFactory = void 0;
const enums_1 = require("../enums");
class GrammyParamsFactory {
    exchangeKeyForValue(type, data, args) {
        const ctx = args[0];
        // eslint-disable-next-line @typescript-eslint/ban-types
        const next = args[1];
        switch (type) {
            case enums_1.GrammyParamtype.CONTEXT:
                return ctx;
            case enums_1.GrammyParamtype.NEXT:
                return next;
            case enums_1.GrammyParamtype.SENDER:
                return data && ctx.from ? ctx.from[data] : ctx.from;
            case enums_1.GrammyParamtype.MESSAGE:
                return data && ctx.message
                    ? ctx.message[data]
                    : ctx.message;
            default:
                return null;
        }
    }
}
exports.GrammyParamsFactory = GrammyParamsFactory;
//# sourceMappingURL=grammy-params-factory.js.map