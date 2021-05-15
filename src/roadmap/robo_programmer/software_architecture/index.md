# Software Architecture

::: block Quote
If you think good architecture is expensive, try bad architecture © **Brian Foote**
:::

## Buzzwords

<Buzzword text="Design Patterns"/>
<Buzzword text="Microservices"/>
<Buzzword text="Monolithic application"/>
<Buzzword text="Business Logic"/>
<Buzzword text="Model-View-Controller"/>
<Buzzword text="Test plan"/>
<Buzzword text="SRE"/>
<Buzzword text="SLI, SLO, SLI"/>
<Buzzword text="NALSD"/>
<Buzzword text="UML"/>
<Buzzword text="ATAM"/>
<Buzzword text="ACDM"/>
<Buzzword text="QAS"/>

## Quality Attributes

Famous **ilities**. Used to formalized qualities of a system that are important for us. Here are some of the quality attributes:

- Debuggability
- Availability
- Performance
- Modifiability
- Testability
- Scalability

To properly describe quality attributes there is a method called Quality Attribute Scenarios. [Here](https://www.cs.unb.ca/~wdu/cs6075w10/sa2.htm) you can read more about the method

## System Design

### ADCM

Architecture Centric Design Method

An approach where the product development moves from an architecture review to an architecture review instead of moving from a prototype to a prototype:

1) Define Architectural Drivers
2) Define current iteration scope
3) Design/Update current Architecture based on the previous steps
4) Design experiments and hypotheses to test
5) Develop
6) Release

### ATAM

Architecture Tradeoff Analysis Method

Helps to evaluate the current architecture

1) Present current architecture state and business context
2) Investigate used design patterns and tactics
3) Build Quality Attributes Utility Tree
4) Analyse market, risks and propose trade-offs
5) Select the most critical scenarios with the help of stakeholders 
6) Conclude with trade-offs, risks and decisions to make

### Design Patterns

There are many repeating problems in system design. So, people have collected solutions to them and called those solutions **Design Patterns**

## Distributed Systems

Modern systems are mostly distributed, so it is good to know the practices of distributed systems design

## Documentation

Decisions should be properly documented to remove questions like **"Why have we used this library instead of that one?"**

### System views

There are multiple prisms through which we can look at a system. To name a few:

- Module View
- Component View
- Deployment View
- Allocation View

### Diagram tools

Here are several tools that can help you with documentation

- [PlantumUML](https://plantuml.com/)
- [D3JS](https://d3js.org/)
- [Diagrams](https://www.diagrams.net/)
- [Gliffy](https://www.gliffy.com/)

## Links

### Books

- [Clean Architecture](https://www.goodreads.com/book/show/18043011-clean-architecture)

- [Design Patterns. GoF](https://www.goodreads.com/book/show/85009.Design_Patterns)

- [Site Reliability Engineering Books](https://sre.google/books/)

### Websites

- [Refactoring Guru](https://refactoring.guru/design-patterns)

- [Design Patterns by Source Making](https://sourcemaking.com/design_patterns)

- [Handbook of Software Architecture by Grady Booch](https://handbookofsoftwarearchitecture.com/)