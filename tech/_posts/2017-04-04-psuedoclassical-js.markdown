---
layout: techPost
date:   2017-04-04
image: '/images/Pseudoclassical.png'
title: Pseudoclassical JS
link: 'https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md'
area: JavaScript
summary: Talks about psuedoclassical JS and the new class keyword in ES6
---
## The Pseudoclassical Past ES5
Before jumping into ES6 and learning the `class` keyword I thought it was important to understand the pseudoclassical ES5 style for creating classes.  I call it pseudoclassical because even though JS is an objct Oriented language it didn't have a formal way of creating class constructors like most languages, hence the term pseudoclassical.

### Components of a Pseudoclass

#### *Constructor*
For the constructor I normally capitalize the function name just to denote its a constructor.
{% highlight js %}
function Bike(gears,style) {
  this.gears = gears
  this.wheels = 2
  this.style = style
}
{% endhighlight %}

#### *Methods*
These allow you to call methods on any instance of `bike()`
{% highlight js %}
Bike.prototype.isExpensive = function() {
  console.log(this.style !== 'cruiser')
}
Bike.prototype.countGears = function() {
  console.log('I has',this.gears,'gears')
}
{% endhighlight %}

### To Create an instance of a Pseudoclass
{% highlight js %}
var myBike = new Bike(12,'mountain')
{% endhighlight %}
Now if I run the methods in this instance of Bike:
{% highlight js %}
console.log(myBike.wheels) // this will print out 2
myBike.isExpensive() // Will log out true
myBike.countGears() // Will log out I has 12 gears
{% endhighlight %}

#### *What the `new` Keyword does*
It turns any function call into a constructor call, and then 4 things will occur:

1. Brand new empty object created `{}`

2. Object gets linked to different Object

3. New Object gets bound as this keyword for functon call

4. If no return then implicitly return `this`

{% highlight js %}
// If you were to build the new keyword as a function
// you will have to change the name to really run this as
// new is a key word
function new(constructor,args) {
  var obj = {}
  Object.setPrototypeOf(obj,constructor.prototype)
  var argsArray = Array.prototype.slice.apply(arguments)
  return constructor.apply(obj,argsArray.slice(1)) || obj
}
var myBike = new(Bike,12,'mountain')
console.log(myBike.wheels) // this will print out 2
myBike.isExpensive() // Will log out true
myBike.countGears() // Will log out I has 12 gears
{% endhighlight %}

### Classes in ES6
Classes are mainly just syntactic sugar for example:
{% highlight js %}
function Foo(name) {
  this.name
}
Foo.prototype.bar = function() {//...}
Foo.protoype.baz = function() {//...}
// is functionally the same as
class Foo {
  constructor(name) {
    this.name
  }
  bar () {//...}
  baz () {//...}
}
{% endhighlight %}

There are some more things you can do with classes such as
{% highlight js %}
  class Foo {
    constructor(name) {
      this.name
    }
    bar () {//...}
    baz () {//...}
  }
  class Doo extends Foo {
    constructor(type) {
      super(name)
      this.type = type
    }

    showType () {//...}
  }
{% endhighlight %}
Here [extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) is used to make Doo a child of Foo and [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) is used to call functions on an objects parent.  Click on the links for more info.

## Recommendations

To read more on es6 classes or really anything I discussed here.  I highly recommend checking out Kyle Simpson's [You Don't Know JS Series](https://github.com/getify/You-Dont-Know-JS), Kyle Simpson's Front-End Masters video's, or the [FunFunFunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q) YouTube channel as they explain things way better than I can.
