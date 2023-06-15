import { IsEmail, IsNotEmpty } from "class-validator";

export class PortfolioDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}