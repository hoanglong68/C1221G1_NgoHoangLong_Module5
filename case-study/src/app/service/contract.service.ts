import {Injectable} from '@angular/core';
import {Contract} from '../model/Contract';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/Customer';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [];
  submit = false;
  constructor(private http: HttpClient) {
  }

  public getContractList(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contractList');
  }
}
