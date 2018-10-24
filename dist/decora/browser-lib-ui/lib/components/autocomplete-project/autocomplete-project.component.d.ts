import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DecApiService } from './../../services/api/decora-api.service';
export declare const BASE_AUTOCOMPLETE_PROJECT_ENDPOINT = "/projects/options";
export declare class DecAutocompleteProjectComponent implements ControlValueAccessor {
    private decoraApi;
    endpoint: any;
    valueAttr: string;
    companyId: string;
    disabled: boolean;
    required: boolean;
    name: string;
    placeholder: string;
    multi: boolean;
    repeat: boolean;
    blur: EventEmitter<any>;
    optionSelected: EventEmitter<any>;
    private _companyId;
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(decoraApi: DecApiService);
    value: any;
    labelFn(company: any): string;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onValueChanged(event: any): void;
    writeValue(value: any): void;
    setEndpointBasedOnCompanyId(): void;
    onAutocompleteBlur($event: any): void;
}
