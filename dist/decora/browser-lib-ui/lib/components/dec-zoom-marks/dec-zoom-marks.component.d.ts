import { AfterViewChecked, ElementRef, Renderer2, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Marker } from './models/marker.model';
import { DecRenderCommentService } from './../dec-render-comment/dec-render-comment.service';
export declare class DecZoomMarksComponent implements AfterViewChecked {
    private renderer;
    private dialog;
    private decRenderCommentService;
    minZoomLevel: any;
    maxZoomLevel: any;
    stepZoomLevel: any;
    marker: Marker;
    private _marker;
    qaMode: boolean;
    openZoomArea: EventEmitter<{}>;
    private _qaMode;
    private imageElement;
    private commentsArraySize;
    private contentDone;
    private zoomPosition;
    private startX;
    private startY;
    private mouseMoved;
    zoomScale: number;
    canvas: ElementRef;
    canvasEl: HTMLCanvasElement;
    private ctx;
    marksWrapper: ElementRef;
    marksWrapperEl: HTMLDivElement;
    loadingContainer: ElementRef;
    loadingContainerEl: HTMLDivElement;
    onResize(): void;
    constructor(renderer: Renderer2, dialog: MatDialog, decRenderCommentService: DecRenderCommentService);
    ngAfterViewChecked(): void;
    private setupCanvas();
    private setupLoadingContainer();
    private setupMarksWrapper();
    private setupMouseEvents();
    private wheelEvent();
    private mouseleaveEvent();
    private mouseupEvent();
    private addInCommentsArray(comment);
    private mousedownEvent();
    private drawMarks();
    private resizeMarker(zoomScale);
    private zoomYPosition(diffY, zoomScale);
    private zoomXPosition(diffX, zoomScale);
    private enablePointEvents(elements);
    private disablePointEvents(elements);
    private cleanMarks();
    private createPointTag(coordinates, index);
    private createZoomAreaTag(coordinates, index);
    private createSquareTag(coordinates, index);
    private clickEventPointTag(comment);
    private clickEventZoomTag(zoomArea);
    private clearSquare();
    private addCommentNode;
    private removeCommentNode();
    private setCanvasSize(size);
    setMouseMoved(moved: boolean): void;
    private setWrapperSize(size);
    private setZoomPosition(x, y);
    private setWrapperCursor(mousedown?);
    zoom(zoomScale?: number): void;
    zoomIn(amount?: number): void;
    zoomOut(amount?: number): void;
    onZoomSlide(value: number): void;
    getFormatedPositionAndScale: () => {
        file: any;
        position: {
            x: number;
            y: number;
        };
        zoomScale: number;
    };
    addNewZoomArea: (newZoomArea: any) => void;
    editZoomArea(newZoomArea: any): void;
}
