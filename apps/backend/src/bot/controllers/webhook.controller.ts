// import { Controller, Post, Req, Res } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { InjectBot } from '@grammyjs/nestjs';
// import { Bot, webhookCallback } from 'grammy';

// @Controller('bot')
// export class WebhookController {
//   constructor(@InjectBot() private readonly bot: Bot) {}

//   @Post('webhook')
//   async handleWebhook(@Req() req: any, @Res() res: any) {
//     await webhookCallback(this.bot, 'express')(req, res);
//   }
// }