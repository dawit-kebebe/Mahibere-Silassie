import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { Module } from '@nestjs/core/injector/module';
import { ModulesContainer } from '@nestjs/core';
export declare class BaseExplorerService {
    getModules(modulesContainer: ModulesContainer, include?: Function[]): Module[];
    flatMap<T>(modules: Module[], callback: (instance: InstanceWrapper, moduleRef: Module) => T | undefined): T[];
}
