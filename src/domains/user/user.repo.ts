import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class UserRepo {
  constructor(@InjectKnex() private readonly knex: Knex) { }
  
  async create() {
    
  }
}
