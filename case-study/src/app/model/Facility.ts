import {RentType} from './RentType';
import {FacilityType} from './FacilityType';

export interface Facility {
  facilityId: string;
  facilityName?: string;
  facilityArea?: number;
  facilityPrice?: number;
  facilityMaxOfPeople?: number;
  facilityRentType?: RentType;
  facilityType?: FacilityType;
  facilityStandardRoom?: string;
  facilityDescriptionOtherConvenience?: string;
  facilityPoolArea?: number;
  facilityFloors?: number;
  attachService?: string;
}
