import { DynamicModule, OnApplicationShutdown } from '@nestjs/common';
import { GRAMMY_ASYNC_OPTIONS_TYPE, GRAMMY_OPTIONS_TYPE, GrammyConfigurableModuleClass } from './nestjs-grammy.module-definition';
import { ModuleRef } from '@nestjs/core';
export declare class NestjsGrammyModule extends GrammyConfigurableModuleClass implements OnApplicationShutdown {
    private readonly moduleRef;
    constructor(moduleRef: ModuleRef);
    static forRoot(options: typeof GRAMMY_OPTIONS_TYPE): DynamicModule;
    static forRootAsync(options: typeof GRAMMY_ASYNC_OPTIONS_TYPE & {
        botName?: string;
    }): DynamicModule;
    onApplicationShutdown(): Promise<void>;
}
