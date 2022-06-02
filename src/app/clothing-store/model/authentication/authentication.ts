import { CredentialsDTO } from "../credentials/CredentialsDTO";
import { UserSS } from "../userss/userSS";

export class Authentication {
    principal!: UserSS;
    credentials!: CredentialsDTO;
    authorities!: [];
    details!: [];
    authenticated!: boolean;    
}
