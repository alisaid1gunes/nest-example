import { IsString } from "class-validator";

export class UpdateQuoteDto {
    @IsString()
    public content: string;
    @IsString()
    public author: string;
}
