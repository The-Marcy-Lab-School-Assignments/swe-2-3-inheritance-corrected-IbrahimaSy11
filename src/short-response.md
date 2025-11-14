# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

## Response 1

Inheritance means one class can take things from another class, like its methods or properties. It saves time because you don’t have to write the same code again. Without it, code would be longer and harder to keep clean.

---

## Prompt 2

Consider these classes:

```js
class Animal {
  eat() {
    return "eating";
  }
}

class Dog extends Animal {
  bark() {
    return "woof";
  }
}

class Puppy extends Dog {
  play() {
    return "playing";
  }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

## Response 2

When `rex.eat()` runs, JavaScript looks for the `eat()` method in `Puppy`. It doesn’t find it there, so it checks `Dog`, then `Animal`, where it finds it. Inheritance lets `rex` use methods from all the classes above it without repeating code.

---

## Prompt 3

Look at these classes:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    // YOUR CODE HERE
    super(name, salary);
    this.department = department;
  }
  getDetails() {
    // YOUR CODE HERE - should include both the Employee details
    // AND the department info
    return `${super.getDetails()} and manages the ${
      this.department
    } department`;
  }
}
```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## Response 3

We use `super` to call the parent class and get its info. Without it, the program wouldn’t know about the name or salary from `Employee` and would show an error.
