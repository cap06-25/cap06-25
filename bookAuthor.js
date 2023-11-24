function CreateAuthor(name,birthYear,nationality){
    this.name=name;
    this.birthYear=birthYear;
    this.nationality=nationality;
}
function CreateAuthorBook(title,author,gener,price){
    this.title=title;
    this.author=author;
    this.gener=gener;
    this.price=price;
}
let a1 = new CreateAuthor("uttam",1994,"Indian");
let a2 = new CreateAuthor("ritu",1992,"cherkiyan");

let b1 = new CreateAuthorBook("unstopable",a1,"stocktrading",10000000);
let b2 = new CreateAuthorBook("learner",a2,"forextrade",1000000);
console.log(b1,b2);