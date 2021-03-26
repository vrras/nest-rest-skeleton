import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
  ],
  exports: [
    ConfigModule,
    DatabaseModule,
  ],
})
export class SharedModule {}
