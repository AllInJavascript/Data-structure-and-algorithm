class Person {
  constructor(name) {
    this.name = name
  }
  say () {
    alert(this.name)
  }
}

const p1 = new Person('xiaoyan')
p1.say()