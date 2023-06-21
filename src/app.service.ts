import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {   
    
    getHello(): string {
        return "Service is working!";
    }
    getHelpCheck(): string {
        return "Get Help Check!";
    }

}