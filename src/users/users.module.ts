// this is created by cli >> nest -g mo users

import { Module } from '@nestjs/common';

@Module({})
export class UsersModule {
    constructor(){
        console.log("User Module Has Created ");
    }
}
