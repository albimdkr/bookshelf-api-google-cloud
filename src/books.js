const { nanoid } = require('nanoid');

//OOP Paradigm
class Books{
    constructor(masukan) {
        //Deklarasi kebutuhan ketentua data
        this.id = nanoid(10);
        this.name = masukan.year;
        this.author = masukan.author;
        this.summary = masukan.summary;
        this.publisher = masukan.publisher;
        this.pageCount = masukan.pageCount;
        this.readPage = masukan.readPage;
        this.finished = masukan.finished;
        this.reading = masukan.reading;

        //Deklarasi data waktu
        const currentTime = new Date().toISOString();
        this.insertedAt = currentTime;
        this.updatedAt = currentTime;
    }

    updateBook(dataBaru) {
        this.name = dataBaru.name;
        this.year = dataBaru.year;
        this.author = dataBaru.author;
        this.summary = dataBaru.summary;
        this.publisher = dataBaru.publisher;
        this.pageCount = dataBaru.pageCount;
        this.readPage = dataBaru.readPage;
        this.reading = dataBaru.reading;
        this.updatedAt = new Date().toISOString();
    }
    
    //Getter ID
    getId(){
        return {id: this.id};
    }

    //Getter Name
    getName() {
        return {name: this.name};
    }

    //Getter Publisher
    getPublisher() {
        return {publisher: this.publisher};
    }
}

module.exports = Books;