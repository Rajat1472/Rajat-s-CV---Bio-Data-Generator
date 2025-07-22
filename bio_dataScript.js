        const data=JSON.parse(localStorage.getItem('bioData'));
        document.getElementById("name").innerText=data.name;
        document.getElementById("fname").innerText=data.fname;
        document.getElementById("Mname").innerText=data.Mname;
        document.getElementById("Complexion").innerText=data.Complexion;
        document.getElementById("Height").innerText=data.Height;
        document.getElementById("Religion").innerText=data.Religion;
        document.getElementById("Caste").innerText=data.Caste;
        document.getElementById("DOB").innerText=data.dob;
        document.getElementById("birth_place").innerText=data.birth_place;
        document.getElementById("Education").innerText = data.Education.join(",");
        document.getElementById("occupation").innerText=data.occupation;
        document.getElementById("Salary").innerText=data.Salary;
        document.getElementById("Number of Brothers").innerText=data.Brothers;
        document.getElementById("Number of Sisters").innerText=data.Sisters;
        document.getElementById("Contact").innerText=data.Contact;
        document.getElementById("Address").innerText=data.Address;
        let photoData=localStorage.getItem("photo");
        if(photoData)
    {
        document.getElementById("photo").src=photoData;
    }