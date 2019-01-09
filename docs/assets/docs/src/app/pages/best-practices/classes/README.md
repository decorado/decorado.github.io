# Classes Best Practices

This doc present the best practices used by Cora Team to ensure a good design and strucutre to work on.

## Use private when it is private

Every time we create a variable or function that is only accessed inside the class we must private it.

```javascript
  class MyClass {

    set name(v: string) {
      this._name = v;
    }

    get name(): string {
      return this._name;
    }

    private _name: string;

  }
```
