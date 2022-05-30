import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Quote} from "./quotes/entities/quote.entity";

@Module({
  imports: [
      QuotesModule,
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [Quote],
            synchronize: true,
      }),
      QuotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
