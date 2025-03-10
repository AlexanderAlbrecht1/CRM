export class Customer {
  firstName: string;
  lastName: string;
  birthDate: number;
  street: string;
  address2 : string;
  city: string;
  zipCode: number;
  email: string;
  id: string;
  new: boolean;
  existing: boolean;
  vip: boolean;


  constructor (obj?: any) {
    this.firstName = obj? obj.firstName : '';
    this.lastName = obj? obj.lastName : '';
    this.birthDate = obj? obj.birthDate : '';
    this.street = obj? obj.street : '';
    this.address2 = obj? obj.address2 : '';
    this.city = obj? obj.city : '';
    this.zipCode = obj? obj.zipCode : '';
    this.email = obj? obj.email : '';
    this.id = obj? obj.id : '';
    this.new = obj? obj.new : true;
    this.existing = obj? obj.existing : false;
    this.vip = obj? obj.vip : false;
}
}
