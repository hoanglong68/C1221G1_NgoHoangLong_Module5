import {CustomerType} from './CustomerType';

export interface Customer {
  id: string;
  customerName: string;
  customerDateOfBirth: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerType: CustomerType;
  customerAddress: string;
}
