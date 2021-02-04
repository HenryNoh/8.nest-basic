import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { IsNumber, IsString } from 'class-validator';

// 그냥 코딩
// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];
// }

//PartialType

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
