import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, map } from "rxjs";
import { PopularTagType } from "src/app/shared/types/popularTag.type";
import { GetPopularTagsResponseInterface } from "../types/getPopularTagsResponse.interface";

@Injectable()
export class PopularTagsService {
    constructor(private http: HttpClient) {}

    getPopularTags(): Observable<PopularTagType[]> {
        const url = environment.apiUrl + '/tags';

        return this.http.get<GetPopularTagsResponseInterface>(url).pipe(map((response) => response.tags));
    }
}