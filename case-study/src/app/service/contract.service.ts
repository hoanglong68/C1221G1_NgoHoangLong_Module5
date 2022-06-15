import {Injectable} from '@angular/core';
import {Contract} from '../model/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [];

  constructor() {
  }

  public findAll() {
    return this.contractList;
  }
}
