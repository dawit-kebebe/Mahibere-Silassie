import { OnModuleInit } from '@nestjs/common';
import { ModuleRef, ModulesContainer } from '@nestjs/core';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';
import { ExternalContextCreator } from '@nestjs/core/helpers/external-context-creator';
import { Bot } from 'grammy';
import { MetadataAccessorService } from './metadata-accessor.service';
import { BaseExplorerService } from './base-explorer.service';
import { GrammyModuleOptions } from '../interfaces';
export declare class ListenersExplorerService extends BaseExplorerService implements OnModuleInit {
    private readonly grammyOptions;
    private readonly botName;
    private readonly moduleRef;
    private readonly metadataAccessor;
    private readonly metadataScanner;
    private readonly modulesContainer;
    private readonly externalContextCreator;
    private readonly grammyParamsFactory;
    private bot;
    constructor(grammyOptions: GrammyModuleOptions, botName: string, moduleRef: ModuleRef, metadataAccessor: MetadataAccessorService, metadataScanner: MetadataScanner, modulesContainer: ModulesContainer, externalContextCreator: ExternalContextCreator);
    onModuleInit(): Promise<void>;
    explore(): void;
    private registerUpdates;
    private registerListeners;
    private registerIfListener;
    setupBotWithMetadata(bot: Bot, methodRef: Function): Bot<import("grammy").Context, import("grammy").Api<import("grammy").RawApi>>;
}
