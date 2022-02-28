document.getElementById("myform").addEventListener("submit", getstudentdata)

// function for fetch input data 
let arr = JSON.parse(localStorage.getItem("studentdata")) || [];
function getstudentdata(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var imageurl = document.getElementById("imageurl").value;
    var gender = document.getElementById("gender").value;

    studentobject={
        name: name,
        email: email,
        phone: phone,
        address: address,
        imageurl: imageurl,
        gender: gender,
    }

    arr.push(studentobject);
    localStorage.setItem("studentdata", JSON.stringify(arr));
    console.log(arr);
    appenddata(arr);
}

// function for append the fetched data to right side student list 
function appenddata(arr){
    document.getElementById("showdata").innerHTML="";
    arr.map((student)=>{

        var div1 = document.createElement("div");
        div1.id="studentlist"
        var div2 = document.createElement("div");
        div2.id="profile";
        var div3 = document.createElement("div");
        div3.id = "info";

        var image   =document.createElement("img");
        image.id="studentimage";
        image.setAttribute("src", student.imageurl );
        
        var p1 = document.createElement("p");
        p1.textContent = `Name: ${student.name}`;

        var p2 = document.createElement("p");
        p2.textContent = `Email: ${student.email}`;

        var p3 = document.createElement("p");
        p3.textContent = `Phone: ${student.phone}`;

        var p4 = document.createElement("p");
        p4.textContent = `Address: ${student.address}`;

        var p5 = document.createElement("p");
        p5.textContent = `Gender: ${student.gender}`;

        div2.append(image);
        div3.append(p1, p2, p3, p4, p5);
        div1.append(div2, div3)
        document.getElementById("showdata").append(div1);

    })
}