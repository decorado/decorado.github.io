# Views Best Practices

This doc present the best practices used by Cora Team to ensure a good design and strucutre to work on.

## Logic always in the controller

Every time that we use an `IF` in the view we are expressing a `Business Rule` and because of that we should avoid placing the logic inside the `HTML` . Instead of that, we should call a function with a name that represents the condition and evaluates the logic.

### Example

Lets say we should display a `QUARTER` if the user `IS NOT ADMIN` and a `CIRCLE` if the user `IS ADMIN`:

The natural thinking is to place the logic in the view

```html

  <dec-quarter *ngIf="user.admin === false"></dec-quarter>

  <dec-circle *ngIf="user.admin === true"></dec-circle>

```

The best practice here is to use another approach. We have to create a method that evaluates the data and detects which kind of geometry to use;

```html

  <ng-container [ngSwitch]="shapeBasedOnUserType">

    <dec-quarter *ngSwitchCase="'quarter'"></dec-quarter>

    <dec-circle *ngSwitchCase="'circle'"></dec-circle>

  </ng-container>

```

```javascript
  get shapeBasedOnUserType() {
    if (this.user.admin === true) {
      return 'quarter';
    } else {
      return 'circle';
    }
  }
```

For complex conditions this approach is far more intuitive and clear than putting all the login in the view.

This way anyone can understand what the condition is used for and if we start to use any other data to define which kind os geometry to use we do not need to touch the view.

Remember to use a clear name in the method so it is easy to understand what it does;
