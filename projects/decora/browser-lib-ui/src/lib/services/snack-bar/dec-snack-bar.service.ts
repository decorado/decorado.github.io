import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';


export type MessageType = 'success' | 'primary' | 'info' | 'warn' | 'error';

@Injectable({
  providedIn: 'root'
})
export class DecSnackBarService {

  constructor(public snackBarService: MatSnackBar,
    private translate: TranslateService) { }

  open(message: string, type: MessageType, duration = 4e3, translate: any = {}): MatSnackBarRef<SimpleSnackBar> {
    if (!message) {
      return;
    }
    const msg = translate ? this.translate.instant(message, translate) : message;
    const snackClass = this.getClass(type);

    return this.snackBarService.open(msg, '', {
      duration: duration,
      panelClass: snackClass
    });
  }

  getClass(type: MessageType) {
    switch (type) {
      case 'success':
        return 'snack-success';
      case 'primary':
        return 'snack-primary';
      case 'info':
        return 'snack-info';
      case 'warn':
        return 'snack-warn';
      case 'error':
        return 'snack-error';
    }
  }
}
