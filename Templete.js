var InitialLoad = async () => {

    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");
    if (id != null) {
        var emp = await GetRequest(id);
        if (emp != null) {
            Get('#name').value = emp.name;
            Get('#salary').value = emp.salary;
            Get('#note').value = emp.note;
            CheckDepartments('[name=department]', emp.department);

            //profile pic
            var profCheckbx = getExactCheckBox('[name=profile]', emp.profilePic)
            profCheckbx.checked = true;
            var genderElement = SelectExactGender('[name=gender]', emp.gender);
            genderElement.checked = true;
        }
    }
}
function CheckDepartments(id, depts) {
    let deptArr = depts.split(",");
    let AllDeptElemets = document.querySelectorAll(id);
    AllDeptElemets.forEach(element => {
        deptArr.forEach(x => {
            if (element.nextElementSibling.textContent == x) {
                element.checked = true;
            }
        });
    });
}
function getExactCheckBox(id, pic) {
    var ele;
    var AllElementds = document.querySelectorAll(id);
    AllElementds.forEach(element => {
        var src = element.nextElementSibling.getAttribute('src');
        if (src == pic) {
            ele = element;
        }
    });
    return ele;
}
function SelectExactGender(id, value) {
    var ele;
    var genderElements = document.querySelectorAll(id);
    genderElements.forEach(element => {
        if (element.value == value) {
            ele = element;
        }
    });
    return ele;
}
InitialLoad();
var save= async()=> {
    var emp = new Employee();
    var nameElement = Get('#name');
    emp.salary = Get('#salary').value;
    emp.note = Get('#note').value;
    emp.department = GetDepartment('[name=department]');
    emp.gender = GetGender('[name=gender]')
    emp.name = nameElement.value;
    emp.profilePic = GetImageSrc('[name=profile]');

    await Postrequest(emp);

    window.location.replace("http://127.0.0.1:5501/home.html");
    return true;
}
function cancel() {
    window.location.replace("http://127.0.0.1:5501/home.html");
    return true;
}
function Get(id) {
    return document.querySelector(id);
}
function GetImageSrc(id) {
    var AllItems = document.querySelectorAll(id);
    var selectedItems = [];
    AllItems.forEach(element => {
        if (element.checked) {
            selectedItems.push(element);
        }
    });
    var selectedFirst = selectedItems[0];
    var src = selectedFirst.nextElementSibling;
    return src.getAttribute('src');
}
function GetGender(id) {
    var selected;
    var AllElements = document.querySelectorAll(id);
    AllElements.forEach(x => {
        if (x.checked) {
            selected = x;
        }
    });

    return selected.value;
}
function GetDepartment(id) {
    var st = "";
    document.querySelectorAll(id).forEach(element=>{
        if(element.checked){
            st +=element.nextElementSibling.innerText+",";
        }
     });
    var deptElements = document.querySelectorAll(id);
    deptElements.forEach(element => {
        if (element.checked) {
            st += element.nextElementSibling.innerText + ",";
        }
    })

    return st;
}