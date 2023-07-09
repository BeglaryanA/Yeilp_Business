import { IsString } from "class-validator";

export class RegisterBusinesDto {
    @IsString()
    name : string;

    @IsString()
    password : string;
}