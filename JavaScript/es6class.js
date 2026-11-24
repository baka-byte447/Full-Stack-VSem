class Student{
    #marks = 5;
    constructor(r_no, name, course){
        this.r_no = r_no;
        this.name = name;
        this.course = course;
    }

    getMarks(){
        console.log(this.#marks)
    }
}