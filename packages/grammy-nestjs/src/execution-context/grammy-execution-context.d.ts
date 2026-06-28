import { ContextType, ExecutionContext } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { TgArgumentsHost } from './tg-arguments-host.interface';
import { Context } from 'grammy';
export type GrammyContextType = 'grammy' | ContextType;
export declare class GrammyExecutionContext extends ExecutionContextHost implements TgArgumentsHost {
    static create(context: ExecutionContext): GrammyExecutionContext;
    getType<TContext extends string = GrammyContextType>(): TContext;
    getContext<T extends Context = Context>(): T;
    getNext<T = any>(): T;
}
