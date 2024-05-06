//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.7.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root'
})
export class Client {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    login(body: LoginRequest | undefined): Observable<AuthResponse> {
        let url_ = this.baseUrl + "/api/Auth/login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLogin(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<AuthResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<AuthResponse>;
        }));
    }

    protected processLogin(response: HttpResponseBase): Observable<AuthResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as AuthResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    changePassword(body: ChangePasswordRequest | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/Auth/change-password";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("patch", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processChangePassword(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processChangePassword(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processChangePassword(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param criteriasCount (optional) 
     * @param criteriasCsv (optional) 
     * @return Success
     */
    registerCriterias(criteriasCount: number | undefined, criteriasCsv: FileParameter | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/Criterias/register-criterias?";
        if (criteriasCount === null)
            throw new Error("The parameter 'criteriasCount' cannot be null.");
        else if (criteriasCount !== undefined)
            url_ += "criteriasCount=" + encodeURIComponent("" + criteriasCount) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (criteriasCsv === null || criteriasCsv === undefined)
            throw new Error("The parameter 'criteriasCsv' cannot be null.");
        else
            content_.append("criteriasCsv", criteriasCsv.data, criteriasCsv.fileName ? criteriasCsv.fileName : "criteriasCsv");

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRegisterCriterias(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRegisterCriterias(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processRegisterCriterias(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    criterias(): Observable<Criteria[]> {
        let url_ = this.baseUrl + "/api/Criterias";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCriterias(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCriterias(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Criteria[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Criteria[]>;
        }));
    }

    protected processCriterias(response: HttpResponseBase): Observable<Criteria[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as Criteria[];
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    mentors(): Observable<MentorResponse[]> {
        let url_ = this.baseUrl + "/api/Mentors";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processMentors(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processMentors(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<MentorResponse[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<MentorResponse[]>;
        }));
    }

    protected processMentors(response: HttpResponseBase): Observable<MentorResponse[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as MentorResponse[];
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    anonymousGET(userUid: string): Observable<MentorResponse> {
        let url_ = this.baseUrl + "/{userUid}";
        if (userUid === undefined || userUid === null)
            throw new Error("The parameter 'userUid' must be defined.");
        url_ = url_.replace("{userUid}", encodeURIComponent("" + userUid));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAnonymousGET(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAnonymousGET(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<MentorResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<MentorResponse>;
        }));
    }

    protected processAnonymousGET(response: HttpResponseBase): Observable<MentorResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as MentorResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    anonymousPOST(userUid: string): Observable<void> {
        let url_ = this.baseUrl + "/{userUid}";
        if (userUid === undefined || userUid === null)
            throw new Error("The parameter 'userUid' must be defined.");
        url_ = url_.replace("{userUid}", encodeURIComponent("" + userUid));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAnonymousPOST(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAnonymousPOST(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processAnonymousPOST(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    anonymousPATCH(studentUid: string, body: boolean | undefined): Observable<MatchingResponse> {
        let url_ = this.baseUrl + "/{studentUid}";
        if (studentUid === undefined || studentUid === null)
            throw new Error("The parameter 'studentUid' must be defined.");
        url_ = url_.replace("{studentUid}", encodeURIComponent("" + studentUid));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("patch", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAnonymousPATCH(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAnonymousPATCH(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<MatchingResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<MatchingResponse>;
        }));
    }

    protected processAnonymousPATCH(response: HttpResponseBase): Observable<MatchingResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as MatchingResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    valuationsPOST(studentUid: string, body: { [key: string]: number; } | undefined): Observable<void> {
        let url_ = this.baseUrl + "/{studentUid}/valuations";
        if (studentUid === undefined || studentUid === null)
            throw new Error("The parameter 'studentUid' must be defined.");
        url_ = url_.replace("{studentUid}", encodeURIComponent("" + studentUid));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processValuationsPOST(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processValuationsPOST(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processValuationsPOST(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    valuationsGET(studentUid: string): Observable<{ [key: string]: number; }> {
        let url_ = this.baseUrl + "/{studentUid}/valuations";
        if (studentUid === undefined || studentUid === null)
            throw new Error("The parameter 'studentUid' must be defined.");
        url_ = url_.replace("{studentUid}", encodeURIComponent("" + studentUid));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processValuationsGET(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processValuationsGET(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<{ [key: string]: number; }>;
                }
            } else
                return _observableThrow(response_) as any as Observable<{ [key: string]: number; }>;
        }));
    }

    protected processValuationsGET(response: HttpResponseBase): Observable<{ [key: string]: number; }> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as { [key: string]: number; };
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    users(body: CreateUserRequest | undefined): Observable<UserInfoResponse> {
        let url_ = this.baseUrl + "/api/Users";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUsers(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUsers(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<UserInfoResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<UserInfoResponse>;
        }));
    }

    protected processUsers(response: HttpResponseBase): Observable<UserInfoResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as UserInfoResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    application(body: StudentApplicationRequest | undefined): Observable<StudentResponse> {
        let url_ = this.baseUrl + "/application";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            withCredentials: true,
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processApplication(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processApplication(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<StudentResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<StudentResponse>;
        }));
    }

    protected processApplication(response: HttpResponseBase): Observable<StudentResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as StudentResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export interface AuthResponse {
    token?: string | undefined;
}

export interface ChangePasswordRequest {
    oldPassword?: string | undefined;
    newPassword?: string | undefined;
}

export interface CreateUserRequest {
    name?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    skillsUids?: string[] | undefined;
    nonProffesionalInterestsUids?: string[] | undefined;
    desiredStudyFieldUid?: string;
    locationUid?: string;
    description?: string | undefined;
    dateOfBirth?: Date;
}

export interface Credentials {
    userInfoUid?: string;
    passwordHash?: string | undefined;
    passwordSalt?: string | undefined;
    user?: UserInfo;
}

export interface Criteria {
    name?: string | undefined;
    weight?: number;
    isBeneficial?: boolean;
}

export interface Job {
    uid?: string;
    companyName?: string | undefined;
    positionName?: string | undefined;
    salary?: number;
    startTime?: Date;
    endTime?: Date | undefined;
    userInfo?: UserInfo;
}

export interface Location {
    uid?: string;
    address?: string | undefined;
    city?: string | undefined;
    users?: UserInfo[] | undefined;
}

export interface LoginRequest {
    email?: string | undefined;
    password?: string | undefined;
}

export interface MatchingResponse {
    menthorUid?: string;
    matchingCoefficient?: number;
    otherResults?: { [key: string]: number; } | undefined;
}

export interface Mentor {
    id?: number;
    userInfoUid?: string;
    userInfo?: UserInfo;
    students?: Student[] | undefined;
    startDate?: Date;
}

export interface MentorResponse {
    uid?: string;
    name?: string | undefined;
    description?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    currentSalary?: number | undefined;
    joinDate?: Date;
    dateOfBirth?: Date;
    paidToClub?: number | undefined;
}

export interface NonProfessionalInterest {
    uid?: string;
    name?: string | undefined;
    users?: UserInfo[] | undefined;
}

export interface Role {
    uid?: string;
    name?: string | undefined;
    userInfos?: UserInfo[] | undefined;
}

export interface Skill {
    uid?: string;
    name?: string | undefined;
    users?: UserInfo[] | undefined;
}

export interface State {
    uid?: string;
    name?: string | undefined;
    orderingId?: number;
    students?: Student[] | undefined;
}

export interface Student {
    id?: number;
    userInfoUid?: string;
    userInfo?: UserInfo;
    mentor?: Mentor;
    mentorUid?: string;
    state?: State;
}

export interface StudentApplicationRequest {
    name?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    skillsUids?: string[] | undefined;
    nonProffesionalInterestsUids?: string[] | undefined;
    desiredStudyFieldUid?: string;
    locationUid?: string;
}

export interface StudentResponse {
    uid?: string;
    name?: string | undefined;
    description?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    currentSalary?: number | undefined;
    joinDate?: Date;
    dateOfBirth?: Date;
    paidToClub?: number | undefined;
    state?: State;
}

export interface StudyField {
    uid?: string;
    name?: string | undefined;
    users?: UserInfo[] | undefined;
}

export interface UserInfo {
    uid?: string;
    name?: string | undefined;
    description?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    curentSalary?: number | undefined;
    dateOfBirth?: Date;
    paid?: number;
    roleUid?: string;
    role?: Role;
    jobs?: Job[] | undefined;
    skills?: Skill[] | undefined;
    nonProfessionalInterests?: NonProfessionalInterest[] | undefined;
    locations?: Location[] | undefined;
    studyFields?: StudyField[] | undefined;
    mentorProperties?: Mentor;
    studentProperties?: Student;
    credentials?: Credentials;
}

export interface UserInfoResponse {
    uid?: string;
    name?: string | undefined;
    description?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    currentSalary?: number | undefined;
    joinDate?: Date;
    dateOfBirth?: Date;
    paidToClub?: number | undefined;
}

export interface FileParameter {
    data: any;
    fileName: string;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}