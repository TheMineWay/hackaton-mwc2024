import { ApiModule } from '@api/api.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envConfiguration from './configuration/env.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfiguration],
      envFilePath: '.env',
    }),
    ApiModule,
  ],
})
export class AppModule {}
