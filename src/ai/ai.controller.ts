import { Body, Controller, Post } from '@nestjs/common';

interface Payload {
  content: string;
}

@Controller('ai')
export class AiController {
  @Post()
  summarizeContent(@Body() payload: Payload) {
    return payload.content;
  }
}
