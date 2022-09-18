---
tags:
  - c++
---

# C++

## Core concepts

### Move semantics

- Value categories: lvalue, rvalue(xvalue, prvalue)
- Move constructor and move assignment operator
- Rule of 0, 3, 5
- Templates and rvalue: universal references, reference collapsing, perfect forwarding

### Memory
- Automatic storage duration aka Stack
- Dynamic storage duration aka Heap
- Static storage duration aka Global memory
- Thread-local storage duration
- Structs: Bitfields in structs, alignment
- Empty-base optimization
- Allocators and system Allocators
- Pointers and references
- Object views
- Data ownership and RAII

### Types
- Primitive Types
- Enum and Enum classes
- Structs
- Classes
- Templates
- Template deduction
- Template specialization
- Type traits and policies
- Concepts
- Complete and incomplete types

### Virtual
- Polymorphism
- Inheritance
- Virtual functions
- Virtual destructors
- PIMPL
- vtable
- RTTI

### Compilation
- Preprocessor
- Compiler
- Linker
- Header/Cpp division
- One Definition Rule
- Forward declaration
- Inline functions
- Macros: include, header guards
- Namespaces
- Modules
- Libraries vs executables
- Static and dynamic libraries
- Link time optimization
- Compiler types 
- Compiler attributes
- AST matchers
- Sanitizers

### STL
- Iterators and invalidation
- Containers: vector, deque, list, map, unordered_map, set
- Adaptors: stack, queue, priority queue
- Algorithms
- Chrono
- Erase-remove idiom

### Metaprogramming
- Advanced macros
- Recursive template instantiation
- Constexpr expressions
- Constexpr if
- Variadic arguments
- SFINAE
- Compile time closure

### Multithreading

- Condition Variable
- Mutex
- Lock guards
- Semaphores
- Threads
- Thread pool
- Asynchronous programming
- Coroutine
- Data races
- Atomics
- Compare and Swap

### Other
- Type casting
- Complex declarations
- Operator overloading
- Project Structure
- Lambda functions: Capture, lambdas with templates, specifiers, recursion in lambdas, compile time lambdas, IILE, lambdas as default template argument
- Exceptions: stack unwinding, catch order, noexcept, std::expected or absl::StatusOr
- Class member initialization order and initialization lists
- Copy elision: (N)RVO
- Structured bindings

### Popular C++ Design Patterns

- Template method
- Singleton
- Command method
- Factory and Abstract Factory
- Curiously Recurring Template Pattern
- Type Erasure

## Tools

## Build systems

Big projects contain a lot of files. 

In addition, we may want to have different build options:
- debug
- production
- production with debug

Build systems come to rescue you.

### Make
### Ninja
### CMake
### Bazel

## Package Managers

Open Source is rolling 

### System installation

### Git

### CMake

### Conan

### Vcpkg

### Build2

## Libraries

## Useful tools

[Cpp insights](https://cppinsights.io/)
[Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)


## Links

[CMake examples](https://github.com/ttroy50/cmake-examples)
[Ninja main page](https://ninja-build.org/)
[Awesome CMake](https://project-awesome.org/onqtam/awesome-cmake)

### Books

### Articles


### Tools