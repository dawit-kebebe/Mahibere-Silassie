import { ArgumentsHost } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { TgArgumentsHost } from './tg-arguments-host.interface';
import { Context } from 'grammy';
export declare class GrammyArgumentsHost extends ExecutionContextHost implements TgArgumentsHost {
    static create(context: ArgumentsHost): GrammyArgumentsHost;
    getContext<T extends Context = Context>(): T;
    getNext<T = any>(): T;
}
