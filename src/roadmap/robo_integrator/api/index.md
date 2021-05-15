# API

## Buzzwords

<Buzzword text="REST API"/>
<Buzzword text="FastAPI"/>
<Buzzword text="Swagger"/>
<Buzzword text="JSON"/>
<Buzzword text="YAML"/>
<Buzzword text="XML"/>
<Buzzword text="Protobuf"/>
<Buzzword text="HTTP"/>
<Buzzword text="SSH"/>
<Buzzword text="TCP/IP"/>
<Buzzword text="OSI"/>

## OSI model

OSI model represents the way how information can be transferred from a machine to machine. Here are the layers along with some protocols for the corresponding layer:

- Application: `DNS`, `HTTP`, `FTP`
- Presentation: `HTML`, `Sockets`
- Session: `RPC`
- Transport: `TCP`, `UDP`
- Network: `IP`
- Data Link: `Ethernet`, `PPP`
- Physical: `RJ45`

## API

**A**pplication **P**rogramming **I**nterface is an interface that allows applications to talk to each other and people to formalize their expectations from applications <!-- yaspeller ignore -->

## API construction rules

There are common practices to design APIs. To name a few:

- Command-Query Separation
- Constructor Initialization vs Setter Initialization
- Tell-Don't-Ask
- Exception generation policy
- API Versioning
- Back compatibility

## REST

**RE**presentational **S**tate **T**ransfer is an architectural approach for API design <!-- yaspeller ignore -->

REST is platform independent and language-agnostic, however the most popular interpretation of REST is HTML REST

### HTTP REST

It's implementation of REST based on HTTP protocol. Here are several facts about it:

- Everything is a resource with an ID
- Methods used: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- Headers transfer processing-related information
- Query and body transfer parameters
- Query can be used as a filter
- Stateless requests
- HTML response codes 


### HTTP REST maturity model

According to [Leonard Richardson](https://martinfowler.com/articles/richardsonMaturityModel.html), there are four maturity levels:

- 0 - One URL and only `POST` operations
- 1 - Resource URL separation
- 2 - HTTP verbs (`GET`, `POST`, etc) define data operations
- 3 - Hypermedia controls like `HATEOAS`

## API annotations

API annotations are used to create a basis for testing, documentation and integration. Here are two tools to create API annotations:

- [RAML](https://raml.org/)
- [Swagger](https://swagger.io/)

## Data Serialization

To transfer and save data it is required to represent it somehow. Here are several methods how can we do it:

- [JSON](https://www.json.org/json-en.html)
- [YAML](https://yaml.org/)
- [XML](https://www.w3schools.com/xml/)
- [Protocol Buffers](https://developers.google.com/protocol-buffers)

## Links

### Books

- [APIs: A Strategy Guide](https://www.goodreads.com/book/show/13218490-apis)

### Articles

- [REST API Tutorial](https://restfulapi.net/)
- [HTTP REST maturity model](https://martinfowler.com/articles/richardsonMaturityModel.html)
- [RESTful Tutorial](https://www.restapitutorial.com/)

