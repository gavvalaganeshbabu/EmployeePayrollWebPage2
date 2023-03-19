function GetRequests(id) {
	let endpoint = "";
	if(id != null){
		endpoint +="/"+id;
	}
	let xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'http://localhost:3000/employees'+endpoint, false);

	
	xhr.onreadystatechange = function () {
		const DONE = 4; 
		const OK = 200; 
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				return xhr.responseText 
			} else {
				console.log('Error: ' + xhr.status); 
			}
		}
	};
	
	xhr.send(null);
}
const url = "http://localhost:3000/employees";
let Getrequest = (anyId) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
 		let u = url+"/"+anyId;
         xhr.open("GET",u);
         xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                 resolve(xhr.response);
             } else {
                 reject(xhr.statusText);
             }
         };
         xhr.onerror = () => reject(xhr.statusText);
        xhr.send(null);
     });
 };
let GetRequest = async (id) =>{
	let u= url;
	if(id!=null){
		u = url+"/"+id;
	}
	var resp = await fetch(u);
	var data = await resp.json();
	return data;
}
let GetRe = ()=>{
	return fetch(url);
}
let DeleteRequest = async (id) =>{
	let u= url;
	if(id!=null){
		u = url+"/"+id;
	}
	var resp = await fetch(u,{method:"DELETE"});
	var data = await resp.json();
	return data;
}
let Postrequest =async (employee) => {
	var re = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(employee)
	});
	var data = await re.json();
};