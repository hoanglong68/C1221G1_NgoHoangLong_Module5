import {CustomerType} from './CustomerType';

export interface Customer {
  customerId: string;
  customerCode: string;
  customerName: string;
  customerDateOfBirth: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerStatus: boolean;
  customerType: CustomerType;
}
