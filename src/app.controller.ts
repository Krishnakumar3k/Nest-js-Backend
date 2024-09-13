import { Controller, Post, Delete, Put, Get, Param} from "@nestjs/common";

@Controller("book")
export class BookController{
  //add book
  @Post("/add")
  addBook():string{
    return "Book is added"; 
  }

 //delete book 
 @Delete("/delete")
 deleteBook(): string{
    return "Book is deleted";
 }

  //update book
  @Put("/update")
  updatBook(): string{
    return "Book Is Updated";
  }
 //find all book 
 @Get("/findall")
 findAllBook(): string{
    return "All Book are Finded"
 }

 //findBookById
 @Get('/findBookById/:bookId')
  findBookById(@Param() params): string {
    console.log(params.bookId); 
    return `Book is found by id #${params.bookId}`; 
  }
 
}