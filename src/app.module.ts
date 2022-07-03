import { Module } from '@nestjs/common';
import { TempoModule } from './tempo/tempo.module';

@Module({
  imports: [TempoModule],
})
export class AppModule {}


