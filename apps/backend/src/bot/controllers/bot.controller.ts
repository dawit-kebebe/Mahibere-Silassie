import { CallbackQuery, On, Start, Update } from '@grammyjs/nestjs';
import { Inject, Injectable } from "@nestjs/common";
import { Context } from 'grammy';
import { BotService } from '../services/bot.service';

@Update()
@Injectable()
export class BotController {
    constructor(@Inject() private botService: BotService){}

    @Start()
    async onStart(ctx: Context) {
        await this.botService.onStart(ctx);
    }


    @CallbackQuery('whitelist_me')
    async onWhitelist(ctx: Context) {
        await this.botService.whitelistMe(ctx);
    }

    @CallbackQuery(/cnfrm_wl:\d+/)
    async onConfirmWhitelist(ctx: Context) {
        await this.botService.confirmWhitelist(ctx);
    }
}