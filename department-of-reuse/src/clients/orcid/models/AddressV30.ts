/* tslint:disable */
/* eslint-disable */
/**
 * ORCID Public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CountryV30,
    CountryV30FromJSON,
    CountryV30FromJSONTyped,
    CountryV30ToJSON,
    CreatedDateV30,
    CreatedDateV30FromJSON,
    CreatedDateV30FromJSONTyped,
    CreatedDateV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    SourceV30,
    SourceV30FromJSON,
    SourceV30FromJSONTyped,
    SourceV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressV30
 */
export interface AddressV30 {
    /**
     * 
     * @type {CreatedDateV30}
     * @memberof AddressV30
     */
    createdDate?: CreatedDateV30;
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof AddressV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {SourceV30}
     * @memberof AddressV30
     */
    source?: SourceV30;
    /**
     * 
     * @type {CountryV30}
     * @memberof AddressV30
     */
    country: CountryV30;
    /**
     * 
     * @type {string}
     * @memberof AddressV30
     */
    visibility?: AddressV30VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressV30
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof AddressV30
     */
    putCode?: number;
    /**
     * 
     * @type {number}
     * @memberof AddressV30
     */
    displayIndex?: number;
}

/**
* @export
* @enum {string}
*/
export enum AddressV30VisibilityEnum {
    Limited = 'limited',
    RegisteredOnly = 'registered-only',
    Public = 'public'
}

export function AddressV30FromJSON(json: any): AddressV30 {
    return AddressV30FromJSONTyped(json, false);
}

export function AddressV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30FromJSON(json['source']),
        'country': CountryV30FromJSON(json['country']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function AddressV30ToJSON(value?: AddressV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'source': SourceV30ToJSON(value.source),
        'country': CountryV30ToJSON(value.country),
        'visibility': value.visibility,
        'path': value.path,
        'put-code': value.putCode,
        'display-index': value.displayIndex,
    };
}

