
# Class Exercises

Try these exercises to practice simulating classes in KelpyShark:

## 1. Create a Rectangle

- Write a function `make_rectangle(width, height)` that returns a dictionary with `width` and `height`.
- Write a function `area(rect)` that returns the area.
  - *Hint: Use `rect["width"] * rect["height"]`*

## 2. Simulate a Bank Account

- Write a function `make_account(owner, balance)`.
- Write functions `deposit(account, amount)` and `withdraw(account, amount)`.
- Print the balance after a deposit and a withdrawal.
  - *Hint: Update the `"balance"` key in the dictionary.*

## 3. Inheritance Simulation

- Create a base dictionary `animal` with a `speak` function.
- Copy and extend it to make a `dog` that overrides `speak` to print "Woof!".
  - *Hint: Use `animal.copy()` and assign a new function to `"speak"`.*

## 4. Static Method Simulation

- Write a function `is_even(n)` that returns true if `n` is even.
  - *Hint: Use `n % 2 == 0`.*

## 5. Bonus: Method in Object

- Add a `describe` function to a person dictionary that prints their name and age.

## Solutions

Try to solve these on your own before looking up the answers!
