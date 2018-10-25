import { Component, ViewEncapsulation, Input, forwardRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DecColorPickerModalComponent } from './dec-color-picker-modal/dec-color-picker-modal.component';
import { ColorPickerService } from './../../services/color-picker/color-picker.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DecColorService } from './../../services/color/dec-color.service';

const noop = () => { };

const COLOR_PICKER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DecColorPickerComponent),
  multi: true
};

@Component({
  selector: 'dec-color-picker',
  templateUrl: './dec-color-picker.component.html',
  styleUrls: ['./dec-color-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [COLOR_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class DecColorPickerComponent implements ControlValueAccessor {

  @Input() disabled: boolean;

  @Input() colorFormat = 'rgb';

  @Input() placeholder = 'Color';

  autocomplete = 'off';

  pattern = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';

  set value(v: any) {

    if (this.modelValueReference !== v) {

      this.modelValueReference = v;

    }

    this.onChangeCallback(this.value);

    this.onTouchedCallback();

  }
  get value(): any {
    return this.modelValueReference;
  }

  hexValue;

  private modelValueReference: any;

  private onTouchedCallback: () => void = noop;

  private onChangeCallback: (_: any) => void = noop;

  constructor(private dialog: MatDialog, private colorPickerService: ColorPickerService, public colorService: DecColorService) { }

  writeValue(value: any): void {

    value = value || [255, 255, 255]; // ensure modal value

    this.modelValueReference = value;

    this.updateHexValueBasedOnModelValueAndFormat();

  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  startColorPicker() {
    this.colorPickerService.start.subscribe((color) => {
      this.hexValue = color;
      this.modelValueReference = this.hexValue;
      this.setValueBasedOnColorFormat();
    });
  }

  openColorBox() {
    this.dialog.open(DecColorPickerModalComponent, {
      data: { color: this.hexValue }, width: '320px', id: 'colorContainer', panelClass: ['color-picker-container', 'no-padding', 'box-shadow-none'], hasBackdrop: false, disableClose: true
    }).afterClosed().subscribe(color => {
      if (color) {
        this.hexValue = color;
        this.setValueBasedOnColorFormat();
      }
    });
  }

  setValueBasedOnColorFormat() {
    if (this.modelValueReference) {
      const lastValueAsHexa = this.colorFormat === 'hex'
        ? this.modelValueReference
        : this.colorService.rgbToHex(this.modelValueReference[0] || 0, this.modelValueReference[1] || 0, this.modelValueReference[2] || 0);
      if (this.hexValue.match(/^#(?:[0-9a-f]{3}){1,2}$/i) && this.hexValue !== lastValueAsHexa) {
        this.value = this.colorFormat === 'hex' ? this.hexValue : this.colorService.hexToRgb(this.hexValue);
      }
    }
  }


  private updateHexValueBasedOnModelValueAndFormat() {
    const color = this.modelValueReference;
    if (color) {
      if (this.colorFormat === 'rgb') {
        this.hexValue = this.colorService.rgbToHex(color[0], color[1], color[2]);
      } else {
        this.hexValue = color;
      }
    } else {
      this.hexValue = '';
    }
  }

}
