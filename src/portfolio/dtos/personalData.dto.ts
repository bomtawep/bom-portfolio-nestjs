import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber } from "class-validator";

export class PersonalDataDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsString()
    nickname: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsPhoneNumber('TH')
    phone_number: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    line_id: string;

    @IsNotEmpty()
    @IsString()
    address: string;
}