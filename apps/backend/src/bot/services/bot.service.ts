import { Inject, Injectable, Logger } from "@nestjs/common";
import { Context } from "grammy";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import {escapeMarkdownV2} from "@/utils/md"

@Injectable()
export class BotService {
    constructor(@Inject('BOT_REPOSITORY') private userRepo: Repository<User>) { }

    async onStart(ctx: Context) {
        if (!ctx.from) return;

        if (await this.isWhitelisted(ctx.from.id)) {
            ctx.reply(
                `Your account is whitelisted\\!`,
                {
                    parse_mode: "MarkdownV2",
                    reply_markup: {
                        inline_keyboard: [[{
                            text: 'Mahibere Sillasie',
                            web_app: {
                                url: process.env.MINIAPP_URL!
                            }
                        }]]
                    }
                }
            );
        } else {
            ctx.reply(`Your account is **not** whitelisted\\!`,
                {
                    parse_mode: "MarkdownV2",
                    reply_markup: {
                        inline_keyboard: [[{
                            text: 'Whitelist My Account!',
                            callback_data: "whitelist_me"
                        }]]
                    }
                });
        }
    }

    async whitelistMe(ctx: Context) {
        if (!ctx.from) return;

        if (await this.isWhitelisted(ctx.from.id)) {
            return ctx.reply(
                `Your account is already whitelisted\\!`,
                {
                    parse_mode: "MarkdownV2",
                    reply_markup: {
                        inline_keyboard: [[{
                            text: 'Mahibere Sillasie',
                            web_app: {
                                url: process.env.MINIAPP_URL!
                            }
                        }]]
                    }
                }
            );
        }

        try {
            const cleanName = escapeMarkdownV2(ctx.from.first_name + ' ' + ctx.from.last_name || '');
            const cleanUsername = escapeMarkdownV2(ctx.from.username || 'Unknown');

            const text = [
                `User ${cleanName} is requesting to be whitelisted\\.`,
                'Please validate the request\\!\\!',
                `Name: ${cleanName}`,
                `Username: @${cleanUsername}`
            ].join('\n');


            await this.userRepo.insert({
                telegram_id: ctx.from.id,
                first_name: ctx.from.first_name,
                last_name: ctx.from.last_name,
                username: ctx.from.username,
                is_active: false
            })

            const adminIds = process.env.ADMIN_IDS!.split(',');
            adminIds.forEach(id => {
                ctx.api.sendMessage(
                    id,
                    text,
                    {
                        parse_mode: "MarkdownV2",
                        reply_markup: {
                            inline_keyboard: [[{
                                text: 'Confirm Whitelist!',
                                callback_data: `cnfrm_wl:${ctx.from?.id}`
                            }]]
                        }
                    }
                )
            })
        } catch (error) {
            Logger.error(error);
            return ctx.reply(
                `An error occurred while whitelisting your account\\.`,
                {
                    parse_mode: "MarkdownV2"
                }
            );
        }
    }

    async confirmWhitelist(ctx: Context) {
        if (!ctx.from) return;

        const callbackQuery = ctx.callbackQuery?.data;
        if (!callbackQuery) return;

        const [callback, splittedId] = callbackQuery.split(":");
        const userId = Number(splittedId);
        if (callback !== 'cnfrm_wl' || isNaN(userId)) return;

        if (await this.isWhitelisted(userId)) {
            return ctx.reply(
                `User's account is already whitelisted\\!`,
                {
                    parse_mode: "MarkdownV2"
                }
            );
        }

        try {
            const user = await this.userRepo.findOne({
                where: {
                    telegram_id: userId,
                }
            })

            if (!user) {
                return ctx.reply(
                    `User not found\\.`,
                    {
                        parse_mode: "MarkdownV2"
                    }
                );
            }

            await this.userRepo.update({
                telegram_id: userId,
            }, {
                is_active: true
            })


            return Promise.all([
                ctx.reply(
                    `User's account successfully whitelisted\\!`,
                    {
                        parse_mode: "MarkdownV2"
                    }
                ),

            ctx.api.sendMessage(userId,
                `Your account is successfully whitelisted\\!`,
                {
                    parse_mode: "MarkdownV2",
                    reply_markup: {
                        inline_keyboard: [[{
                            text: 'Mahibere Sillasie',
                            web_app: {
                                url: process.env.MINIAPP_URL!
                            }
                        }]]
                    }
                }
            )]);
        } catch (error) {
            Logger.error(error);
            return ctx.reply(
                `An error occurred while whitelisting your account\\.`,
                {
                    parse_mode: "MarkdownV2"
                }
            );
        }
    }

    private async isWhitelisted(telegram_id: number) {
        try {
            return await this.userRepo.exists({
                where: {
                    telegram_id: telegram_id,
                    is_active: true
                }
            })
        } catch (error) {
            Logger.error(error);
            return false;
        }
    }
}