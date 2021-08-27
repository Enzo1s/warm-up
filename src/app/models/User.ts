import { Address } from "./Address";
import { Company } from "./Company";

export class User {
    id!: number;
    name!: string
    username!: string;
    company!: Company;
    email!: string;
    phone!: string;
    website!: string;
    address!: Address
}