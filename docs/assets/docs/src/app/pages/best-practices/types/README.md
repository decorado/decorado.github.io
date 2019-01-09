# Types for Decora App

We use Types to help coding and discover object properties. For that, we use Typescript.

## Best Practices

### Create a DTO model for every type

You should use types in everything to make it easy for other developers to know what data they are manipulating

## Type vs Interface vs Class vs Enum

### Type

Type is used to represent possible values of an property.

Lets say we have a Person that have some possible genders. We can create a type called PersonGender to ensure that we will use correct gender to fill it.

`person.models.ts`

````javascript
  export type PersonGenders = 'MALE' | 'FEMALE' | 'UNDEFINED';

  export type PersonPregnancyStatus = 'PREGNANT' | 'NOT PREGNANT';
````

### Interface

Interface is used to represent the virtual structure of an object and it is used for type-cheking only. At the compiled files it won't exist. It is simply a structural contract that defines what the properties of an object should have

Lets say we have a Person with name, gender and pregnancy status. We can use Interfaces to type a Person object so everyone that uses it can know what properties it has.

`person.models.ts`

````javascript
  export interface Person {
    name: string;
    gender: PersonGenders;
    pregnancy: PersonPregnancyStatus;
  };
````

The problem with interfaces here is that we need to remember that `MALE` does not get pregnant so we should remove the value of the pergnant property if the gender is `MALE`. For that we use classes.

### Class

Class is used to represent the structure of an object. It is essentially like Classes in other languages. It can be instantiated, has methods, static values, getter, setter and constructor.

Lets use the interface example and fix its problem of `MALE` having pregnancy status. As we know `MALE` does not get pregnant so we should remove the value of the pergnant property if the gender is `MALE`;

`person.models.ts`
````javascript
  export interface Person {
    name: string;
    pregnancy: PersonPregnancyStatus;

    set gender(v: PersonGenders) {
      this._gender = v;
      this.removePregnancyIfNotFemale();
    }

    get gender() {
      return this._gender;
    }

    private _gender: PersonGenders;

    private removePregnancyIfNotFemale() {
      if (this.gender !== 'FEMALE') {
        this.pregnancy = undefined;
      }
    }
  };
````

We used `getter` and `setter` to watch for changes in the `gender` property and when it is not `FEMALE` we set the `pregnancy` to `undefined`;

The good point here is tha every time we change the gender value the class will adjust the pregnancy property based on the gender to avoid having pregnant males.

### Enum

Enum is used to create maps of values. This way we make simple to remember all the possible values of a Type.

Lets say we do no know what genders we can use in a form select. We can use an Enum to facilitate this:

`person.models.ts`
````javascript
  export enum PERSON_GENDER {
    MALE = 'male',
    FEMALE = 'female',
    UNDEFINED = 'undefined',
  };
````

So, when creating the select options we can use the ENUM to get the possibilities:


````javascript
  const options = [PERSON_GENDER.MALE, PERSON_GENDER.FEMALE, PERSON_GENDER.UNDEFINED]
````
