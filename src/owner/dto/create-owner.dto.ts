import { IsNotEmpty } from "class-validator";

export class CreateOwnerDto {
    @IsNotEmpty({massage:"a nev mezo ne lehet ures"})
    name:string
    @IsNotEmpty({massage:"a busnis mezo nem ehet ures"})
    busnis:boolean


}

