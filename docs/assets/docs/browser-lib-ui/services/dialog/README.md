# Decora Dialog

`import { DecDialogModule } from '@decora/browser-lib-ui'`

This Service  was built to allow the presentation of pqages inside a dialog. This is used to improve matdialog options and to insert a wrapper in our dialogs.

## Example

```javascript
import { PersonDetailComponent } from '@app/shared/components/person/person-detail.component';


const person = {name: 'my name', birth: '2001/15/05'};

const dialogRef = this.decDialog.open(PersonDetailComponent, {
  title: `My person dialog title`,
  context: {
    person: person,
  }
});

dialogRef.componentInstance.child.subscribe((childComponentInstance: PersonDetailComponent) => {
  childComponentInstance.close.subscribe(() => {
    dialogRef.close();
  });
});

```

## Waiting for child component instance to be ready

Subscribe to `child` to get access to know when the child component is ready. This observable does not need `unsubscribe`.

```javascript
  dialogRef.componentInstance.child.subscribe((childComponentInstance: PersonDetailComponent) => {

    childComponentInstance.close.subscribe(() => {

      dialogRef.close();

    });

  });

```


## Accessing childComponentInstance

```javascript
  dialogRef.componentInstance.childComponentInstance
```

## Access the dialog from the child component
You can acess the decDialog instance from the constructor.


```javascript
  constructor(
    private decDialogRef: DecDialogComponent,
  ) { }
```

## Methods

### Close

Closes the dialog

```javascript
  constructor(
    private decDialogRef: DecDialogComponent,
  ) {
    this.decDialogRef.close();
  }
```

## Models

```javascript
export type DecDialogColor = 'primary' | 'accent' | 'warn' | 'default' | 'basic';

export class DecDialogOpenConfiguration {
  autoFocus?: boolean;
  color?: DecDialogColor;
  contentPadding?: boolean;
  context?: any;
  disableClose?: boolean;
  height?: string;
  hideBackButton?: boolean;
  id?: number;
  title?: string;
  width?: string;

  constructor(data: any = {}) {
    this.autoFocus = data.autoFocus;
    this.color = data.color || 'primary';
    this.contentPadding = data.contentPadding || '32px';
    this.context = data.context;
    this.disableClose = data.disableClose;
    this.height = data.height;
    this.hideBackButton = data.hideBackButton;
    this.id = data.id || parseInt(`${Date.now()}${Math.random() * 10000 * Math.random() * 100}`, 10);
    this.title = data.title;
    this.width = data.width;
  }
}
```
