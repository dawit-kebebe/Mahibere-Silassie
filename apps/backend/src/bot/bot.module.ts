import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { userProvider } from './bot.providers';
import { BotController } from './controllers/bot.controller';
import { BotService } from './services/bot.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestjsGrammyModule } from '@grammyjs/nestjs';

@Module({
    imports: [
        DbModule,
        ConfigModule,
        NestjsGrammyModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                token: configService.get<string>('BOT_TOKEN')!,
                // useWebhook: true,
            }),
            botName: 'Mahibere-Sillasie',
        }),
    ],
    providers: [...userProvider, BotController, BotService],
})
export class BotModule { }
