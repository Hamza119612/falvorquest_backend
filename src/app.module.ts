import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import config from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      ...config,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('Database Connection established succfully');
  }
}
