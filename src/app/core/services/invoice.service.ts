import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from '@core/api.token';
import { HttpClient } from '@angular/common/http';
import { AllInvoicesRes } from '@core/models/Invoice';
import { createParamsFromObject } from '@core/utils/create-params-from-object';
import { InvoiceFilter } from '@core/models/InvoiceFilter';

export interface InvoiceState {
  filters: InvoiceFilter | null;
}

export const initialState: InvoiceState = {
  filters: null
};

@Injectable({ providedIn: 'root' })
export class InvoiceService {

  private invoiceState = new BehaviorSubject<InvoiceState>(initialState);

  get state(): InvoiceState {
    return this.invoiceState.getValue();
  }

  constructor(@Inject(API_URL) private api: string, private http: HttpClient) {
  }

  all(page: number, pageSize: number, filters?: InvoiceFilter): Observable<AllInvoicesRes> {

    let finalFilters = this.state.filters ?? {};

    if (filters) {
      finalFilters = filters;
    }

    const params = createParamsFromObject(finalFilters)
      .append('page', page)
      .append('pageSize', pageSize);

    return this.http.get<AllInvoicesRes>(`${ this.api }/invoices`, { params })
      .pipe(tap(x => console.log(x)));
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${ this.api }/invoices/${ id }`);
  }

}
