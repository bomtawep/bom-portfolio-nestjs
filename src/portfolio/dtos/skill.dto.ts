import { IsNotEmpty, IsString } from "class-validator";

export class SkillDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}