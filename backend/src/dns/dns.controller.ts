import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DnsService } from './dns.service';
import { DnsQueryDto } from './dto/dns.dto';

@Controller('dns')
export class DnsController {
  constructor(private dnsService: DnsService) {}

  @Post('execute-query')
  async executeQuery(@Body() dnsQueryDto: DnsQueryDto) {
    return this.dnsService.executeDnsQuery(dnsQueryDto);
  }
}
