export abstract class BaseUserModel {

    firstName: string;
    lastName: string;
    profilePicture: string;

    
    public get fullName() : string {
        return this.firstName + " " + this.lastName;
    }
    
}