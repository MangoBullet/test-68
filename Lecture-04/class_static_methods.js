class Dog {
  constructor(name) {
    this._name = name;
  }
  introduce() {
    console.log('This Dog name is ' + this._name + ' !');
  }
  static bark() {
    console.log('Woof!');
  }
}
const myDog = new Dog('Buster');
myDog.introduce();

Dog.bark();