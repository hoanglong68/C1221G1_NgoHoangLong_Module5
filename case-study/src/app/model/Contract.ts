import {Customer} from './Customer';
import {Facility} from './Facility';

export interface Contract {
  id: number;
  startDate: string;
  endDate: string;
  deposit: number;
  total?: number;
  employee?: string;
  customer?: Customer;
  facility?: Facility;
}
