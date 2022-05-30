import {IsNotEmpty, IsString} from "class-validator";

export class CreateQuoteDto {
    @IsNotEmpty()
    @IsString()
    public content: string;
    @IsNotEmpty()
    @IsString()
    public author: string;
}
