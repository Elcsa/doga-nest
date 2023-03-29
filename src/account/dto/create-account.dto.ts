import { IsNotEmpty, IsString } from "class-validator";
import { type } from "os";

export class CreateAccountDto {
    id:number
    @IsString()
    @IsNotEmpty({massage:"Nem lehet ures"})
    type:string
    @IsNotEmpty()
  //  @IsNumber()

}