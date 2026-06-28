import { Middleware, BotConfig, PollingOptions, Context } from 'grammy';
export interface GrammyModuleOptions<C extends Context = Context> {
    token: string;
    botName?: string;
    options?: BotConfig<C>;
    pollingOptions?: PollingOptions | false;
    useWebhook?: boolean;
    include?: Function[];
    middlewares?: ReadonlyArray<Middleware<C>>;
}
