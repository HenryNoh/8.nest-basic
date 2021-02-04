import { Module } from '@nestjs/common';
import { MoviesController } from './entities/movies.controller';
import { MoviesService } from './entities/movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
