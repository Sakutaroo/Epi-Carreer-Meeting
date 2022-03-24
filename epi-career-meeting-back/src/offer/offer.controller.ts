import { Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { check } from 'yargs';
import { OfferPost } from './offer-post.dto';

@Controller()
export class OfferController {
  // constructor(private readonly offerService: OfferService) {}

  @Post('/document')
  async Create(@Res() response: Response) { //, @Body() offerPost: OfferPost) {
      console.log("OK");
      response.status(HttpStatus.OK).send();
  }
}
