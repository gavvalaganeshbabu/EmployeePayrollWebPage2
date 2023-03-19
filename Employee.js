class Employee{
    id;
    name;
    profilePic;
    gender;
    department;
    salary;
    note;
    toString(){
        var result = `Id : ${this.id??0} \n
        Name : ${this.name??"nothing"} \n
        proficPic: ${this.profilePic??"nothing"} \n
        Gender : ${this.gender??"nothing"} \n
        Department : ${this.department??"nothing"} \n
        Salary : ${this.salary??"nothing"} \n
        Note : ${this.note??"nothing"}`;
        return result;
    }
}