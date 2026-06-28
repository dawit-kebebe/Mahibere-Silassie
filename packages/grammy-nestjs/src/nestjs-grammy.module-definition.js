"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRAMMY_ASYNC_OPTIONS_TYPE = exports.GRAMMY_OPTIONS_TYPE = exports.GRAMMY_MODULE_OPTIONS = exports.GrammyConfigurableModuleClass = void 0;
const common_1 = require("@nestjs/common");
_a = new common_1.ConfigurableModuleBuilder()
    .setFactoryMethodName('forRootAsync')
    .setClassMethodName('forRoot')
    .build(), exports.GrammyConfigurableModuleClass = _a.ConfigurableModuleClass, exports.GRAMMY_MODULE_OPTIONS = _a.MODULE_OPTIONS_TOKEN, exports.GRAMMY_OPTIONS_TYPE = _a.OPTIONS_TYPE, exports.GRAMMY_ASYNC_OPTIONS_TYPE = _a.ASYNC_OPTIONS_TYPE;
//# sourceMappingURL=nestjs-grammy.module-definition.js.map