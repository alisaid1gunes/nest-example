import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import {Quote} from "./entities/quote.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class QuotesService {

  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
  ) {}

  create(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    const quote : Quote = new Quote();
    quote.author = createQuoteDto.author;
    quote.content = createQuoteDto.content;
    return this.quotesRepository.save(quote);
  }

  findAll(): Promise<Quote[]> {
    return this.quotesRepository.find();
  }

  findOne(id: number): Promise<Quote> {
    return this.quotesRepository.findOne(id);
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto){
    return this.quotesRepository.update(id,updateQuoteDto);
  }

  remove(id: number) {
    return this.quotesRepository.delete(id);
  }
}
