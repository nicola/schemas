# Schemas

Javascript library and command-line tool to rock Schemas

### work in progress


## The idea

Schemas are the fundamental building block for a Linked Data web. It would be sad then if developers can't get access to data schemas and get the most out of them, no?

This library simplifying searching and querying different data schemas proving a command-line tool and a library for NodeJS.

## Install
```
$ npm install -g schemas
```

## Ideal usage
```
$ schemas search T
(schema.org) Text
(schema.org) Time

$ schemas show Book
(schema.org) Thing > CreativeWork > Book
- bookEdition
- bookFormat
- illustrator
- isbn
- numberOfPages

$ schemas add http://amazingwebsite.com/newschema
(amazingwebsite.com) NewSchema

$ schemas generate Book --mysql
// Helper to generate tables?

```