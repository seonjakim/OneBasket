/** data 형식을 정할 수 있음 */

import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateMovieDto {

  @IsString()
  readonly   title:string

  @IsNumber()
  readonly year:number

  @IsOptional()
  @IsString({each : true})
  readonly genres:string[]
}