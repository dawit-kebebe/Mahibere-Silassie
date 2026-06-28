import { Composer, FilterQuery } from 'grammy';
import { ComposerMethodArgs, StringOrRegexQuery, BotQuery, CommandQuery } from '../types/grammy-types';
export declare function createBotDecorator<TComposer extends Composer<never>, TSearch extends BotQuery>(emitter: BotQuery, method?: CommandQuery): (search?: FilterQuery | StringOrRegexQuery, ...args: ComposerMethodArgs<TComposer, TSearch>) => MethodDecorator;
