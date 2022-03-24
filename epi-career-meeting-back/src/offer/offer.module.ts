import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';

@Module({
  imports: [],
  controllers: [OfferController],
  providers: [],
})
export class OfferModule {}
