import {Customer} from './Customer';
import {Facility} from './Facility';

export interface Contract {
  id: number;
  startDate: string;
  endDate: string;
  deposit: number;
  total?: number;
  customer?: Customer;
  facility?: Facility;
}
