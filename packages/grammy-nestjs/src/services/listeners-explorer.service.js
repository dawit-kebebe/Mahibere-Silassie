"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenersExplorerService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const external_context_creator_1 = require("@nestjs/core/helpers/external-context-creator");
const metadata_accessor_service_1 = require("./metadata-accessor.service");
const nestjs_grammy_constants_1 = require("../nestjs-grammy.constants");
const base_explorer_service_1 = require("./base-explorer.service");
const grammy_params_factory_1 = require("../factories/grammy-params-factory");
const nestjs_grammy_module_definition_1 = require("../nestjs-grammy.module-definition");
const logger = new common_1.Logger('nestjs-grammy:listeners-explorer.service');
let ListenersExplorerService = class ListenersExplorerService extends base_explorer_service_1.BaseExplorerService {
    constructor(grammyOptions, botName, moduleRef, metadataAccessor, metadataScanner, modulesContainer, externalContextCreator) {
        super();
        this.grammyOptions = grammyOptions;
        this.botName = botName;
        this.moduleRef = moduleRef;
        this.metadataAccessor = metadataAccessor;
        this.metadataScanner = metadataScanner;
        this.modulesContainer = modulesContainer;
        this.externalContextCreator = externalContextCreator;
        this.grammyParamsFactory = new grammy_params_factory_1.GrammyParamsFactory();
    }
    async onModuleInit() {
        this.bot = this.moduleRef.get(this.botName, {
            strict: false,
        });
        this.explore();
        if (!this.grammyOptions.useWebhook) {
            logger.debug('pollingOptions: ', this.grammyOptions.pollingOptions);
            await this.bot.start(this.grammyOptions.pollingOptions || {});
        }
    }
    explore() {
        const modules = this.getModules(this.modulesContainer, this.grammyOptions.include);
        this.registerUpdates(modules);
    }
    registerUpdates(modules) {
        const updates = this.flatMap(modules, (wrapper) => {
            if (!wrapper.instance || !wrapper.metatype)
                return;
            const isUpdate = this.metadataAccessor.isUpdate(wrapper.metatype);
            if (!isUpdate)
                return;
            return wrapper;
        });
        updates.forEach((wrapper) => this.registerListeners(this.bot, wrapper));
    }
    registerListeners(bot, wrapper) {
        const { instance } = wrapper;
        const prototype = Object.getPrototypeOf(instance);
        for (const name of this.metadataScanner.getAllMethodNames(prototype)) {
            this.registerIfListener(bot, instance, prototype, name);
        }
    }
    registerIfListener(bot, instance, prototype, methodName) {
        const methodRef = prototype[methodName];
        const metadata = this.metadataAccessor.getListenerMetadata(methodRef);
        if (!metadata?.length) {
            return undefined;
        }
        const botByMetadata = this.setupBotWithMetadata(bot, methodRef);
        const paramsFactory = this.grammyParamsFactory;
        const listenerCallbackFn = this.externalContextCreator.create(instance, prototype[methodName], methodName, nestjs_grammy_constants_1.PARAM_ARGS_METADATA, paramsFactory, undefined, undefined, undefined, 'grammy');
        for (const { method, emitter } of metadata) {
            logger.debug(`Setting up listener for bot.${emitter}('${method}')`);
            botByMetadata[emitter](method, listenerCallbackFn);
        }
    }
    setupBotWithMetadata(bot, methodRef) {
        const metadata = this.metadataAccessor.getBotMetadata(methodRef);
        if (!metadata)
            return bot;
        let botWithFilters = bot;
        for (const { method, arg } of metadata) {
            logger.debug(`Setting up bot for bot.${method}(${arg})`);
            // Looks like TypeScript bug, so I hacked it with 'as any'
            botWithFilters = botWithFilters[method](arg);
        }
        return botWithFilters;
    }
};
exports.ListenersExplorerService = ListenersExplorerService;
exports.ListenersExplorerService = ListenersExplorerService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(nestjs_grammy_module_definition_1.GRAMMY_MODULE_OPTIONS)),
    tslib_1.__param(1, (0, common_1.Inject)(nestjs_grammy_constants_1.GRAMMY_BOT_NAME)),
    tslib_1.__metadata("design:paramtypes", [Object, String, core_1.ModuleRef,
        metadata_accessor_service_1.MetadataAccessorService,
        metadata_scanner_1.MetadataScanner,
        core_1.ModulesContainer,
        external_context_creator_1.ExternalContextCreator])
], ListenersExplorerService);
//# sourceMappingURL=listeners-explorer.service.js.map