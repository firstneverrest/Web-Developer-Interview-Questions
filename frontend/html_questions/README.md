# HTML Questions

### What is DOCTYPE ?

`DOCTYPE` defines the document type of a web page to let the browser know how the document should be interpreted. Every HTML file need to include `<!DOCTYPE html>` at the top. Tip: `<!DOCTYPE html>` does not indicate an HTML5 document but HTML5 document must start with `<!DOCTYPE html>`.

- Document Type Definition (DTD) - describes the tree structure of a document and something about its data. It is a set of markup used in SGML-based language (Standard Generalized Markup Language) such as HTML, XML, XHTML.

#### <u>Reference</u>

- [HTML <!DOCTYPE> Declaration](https://www.w3schools.com/tags/tag_doctype.asp)

### How to serve a page with content in multiple languages ?

1. First approach - set the `lang` attribute to change the language. At the html tag `<html lang="en">`, it makes all elements have `lang="en"` because all elements inherit this attribute from html tag. What you need to do is changing lang attribute to other language. When use google translate, it will appear the other language to translate.
2. Second approach - create multiple HTML files, each file has one language differently. The server then send HTML page to the client depends on the language that user choose.
