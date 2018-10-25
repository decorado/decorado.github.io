import { EventEmitter, ElementRef } from '@angular/core';
import { DecApiService } from './../../services/api/decora-api.service';
import { ControlValueAccessor } from '@angular/forms';
import { UploadProgress } from './upload.models';
export declare const DEC_UPLOAD_CONTROL_VALUE_ACCESSOR: any;
export declare class DecUploadComponent implements ControlValueAccessor {
    private service;
    progresses: UploadProgress[];
    disabled: boolean;
    endpoint: string;
    multiple: boolean;
    error: EventEmitter<{}>;
    uploaded: EventEmitter<{}>;
    progress: EventEmitter<{}>;
    inputFile: ElementRef;
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(service: DecApiService);
    value: any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onValueChanged(event: any): void;
    writeValue(v: any[]): void;
    filesChanged(event: any): void;
    openFileSelection(): void;
    getProgressbarMode(progress: any): any;
    getProgressValueBasedOnMode(progress: any): any;
    private uploadFile(file, index);
    private detectUploadEnd();
    private clearInputFile();
    private clearProgresses();
    private emitUploadedFiles();
}
