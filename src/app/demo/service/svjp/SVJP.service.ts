import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {apiSearchParametersMap} from "../../components/utilities/formFields";

@Injectable()
export class SVJPService {

    SVJP_SERVICE_URL = 'http://localhost:8000';

    constructor(private http: HttpClient) {
    }


    getDevotees(searchParameters: {[x: string]: string; }) {
        let url = '/devotees'
        Object.keys(searchParameters).filter((eachParameter) => (searchParameters[eachParameter] && searchParameters[eachParameter] != '')).forEach(
            (filteredParameter) => {
                url += ((url.includes('?'))? '&' : '?') + apiSearchParametersMap[filteredParameter] + '=' + searchParameters[filteredParameter];
            }
        );
        console.log(url);
        return this.http.get(this.SVJP_SERVICE_URL + url);
    }
    getOrganisations() {
        return this.http.get(this.SVJP_SERVICE_URL + '/organisations');
    }

    getAccountHeads(organisationCode: string) {
        return this.http.get(this.SVJP_SERVICE_URL + '/accountHeads/' + organisationCode);
    }

    createReceipt(receiptPayload: any) {
        return this.http.post(this.SVJP_SERVICE_URL + '/receipts/', receiptPayload);
    }

    createDevotee(receiptPayload: any) {
        return this.http.post(this.SVJP_SERVICE_URL + '/devotees/', receiptPayload);
    }

}
