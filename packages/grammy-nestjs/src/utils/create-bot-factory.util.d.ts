import { Bot, Context } from 'grammy';
import { GrammyModuleOptions } from '../interfaces';
export declare function createBotFactory<C extends Context = Context>(moduleOptions: GrammyModuleOptions<C>): Promise<Bot<C>>;
