import { EventEmitter, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DecApiService } from './../../services/api/decora-api.service';
export declare class DecAutocompleteQuoteComponent implements ControlValueAccessor, AfterViewInit {
    private decoraApi;
    endpoint: string;
    valueAttr: string;
    disabled: boolean;
    required: boolean;
    name: string;
    placeholder: string;
    multi: boolean;
    repeat: boolean;
    blur: EventEmitter<any>;
    optionSelected: EventEmitter<any>;
    projectId: string;
    decoraProduct: string;
    decoraProductVariant: string;
    private _projectId;
    private _decoraProduct;
    private _decoraProductVariant;
    private viewInitialized;
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(decoraApi: DecApiService);
    ngAfterViewInit(): void;
    value: any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onValueChanged(event: any): void;
    writeValue(value: any): void;
    onAutocompleteBlur($event: any): void;
    labelFn(item?: any): string;
    private setEndpointBasedOnInputs();
}
