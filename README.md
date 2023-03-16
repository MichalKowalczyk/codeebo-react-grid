# codeebo-react-grid
React grid used by Codeebo.

## NPM Package:
https://www.npmjs.com/package/codeebo-react-grid

## Getting Started
You can install the module via `npm` or `yarn`:

```sh
npm install codeebo-react-grid
```

## Avaliable components:
Row, Col, Grid, Container, GenericList and scss spacings.

## Usage:

###Grid
```tsx
<Row gap={16}>
  <Col size={[2, 3, 6, 12]} offset={[1, 1, 0, 0]}> Your content </Col>
  <Col size={[3, 4, 6, 12]} offset={[1, 0, 0, 0]}> Your content </Col>
  <Col size={[3, 4, 6, 12]} offset={[1, 0, 0, 0]}> Your content </Col>
</Row>
```

###GenricList

prop cols values structure:
[`Column name`, `property name`, `size(1-12)`, `optional function`]
```tsx
<GenericList
  data={[
    { name: "Adam", surname: "Nowak" },
    { name: "Piotr", surname: "Kowalsky" },
  ]}
  cols={[
    ["Imię", "name", 6],
    ["Nazwisko", "surname", 6, (x) => <>{x.toUpperCase()}</>],
  ]}
/>
```
### Size/offset array index means:
- 1st - large desktop
- 2nd - medium desktop
- 3th - tablet
- 4th - mobile
