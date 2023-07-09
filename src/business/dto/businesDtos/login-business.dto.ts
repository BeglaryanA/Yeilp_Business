import { IsString } from "class-validator";

export class LoginBuisnesDto {
    @IsString()
    name : string;

    @IsString()
    password : string;
}