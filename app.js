
var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});


customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
  courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
  classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
  students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];
  //const port = 2410;
  var port=process.env.PORT||2410
  app.listen(port, () => console.log(`Node app listening on port ${port}!`));
  app.post("/login", function (req, res) {
    let body = { email: req.body.email, password: req.body.password };
    let obj = customers.find(
      (obj) => obj.email === body.email && obj.password === body.password
    );
    if (obj === undefined) res.status(401).send("Login Failed!!");
    else {
      res.send(obj);
    }
  });
  app.get("/customers",function(req,res){
    res.send(customers)
  })
  app.get("/getStudentNames",function(req,res){
    let arr=students.reduce((acc,curr)=>{
      acc.push(curr.name)
      return acc
    },[])
    res.send(arr)
  })
  app.get("/getFacultyNames",function(req,res){
    let arr=faculties.reduce((acc,curr)=>{
      acc.push(curr.name)
      return acc
    },[])
    res.send(arr)
  })
  app.post("/admin/register",function(req,res){
    let maxid=customers.reduce((prev,curr)=>{
        return (prev.custId > curr.custId) ? prev.custId : curr.custId
    })
    console.log(maxid)
    let body={custId:maxid+1, name:req.body.name,password:req.body.password,email:req.body.email,role:req.body.role}
    customers.push(body)
    res.send("register successfully")
  })

  app.get("/students",function(req,res){
let arr=students
let courseStr=req.query.courses

if(courseStr){
    let courseArr=courseStr.split(",")
    console.log(courseArr)
arr=arr.filter((st)=>courseArr.find((c1)=>c1==st.courses[0]||c1==st.courses[1]||c1==st.courses[2]||c1==st.courses[3]||c1==st.courses[4]||c1==st.courses[5]||c1==st.courses[6]))

    } 
    let result = pagination(arr, parseInt(req.query.page));
  console.log('Array ',result)

  res.json({
    page: parseInt(req.query.page),
    items: result,
    totalItems: result.length,
    totalNum: arr.length

  })
})
  app.get("/courses",function(req,res){
   res.send(courses)
    })

  app.get("/courses/:courseId",function(req,res){
    let courseId = +req.params.courseId;
    let index = courses.findIndex((obj1) => obj1.courseId === courseId);
    res.send(courses[index])
    })

  app.put("/courses/:courseId",function(req,res){
    let body=req.body
    let courseId = +req.params.courseId;
    let index = courses.findIndex((obj1) => obj1.courseId === courseId);
  //console.log(courses[index])
  //console.log(body)
   courses[index] = body;
 res.send(body);
  })

  app.get("/faculty",function(req,res){
    let arr=faculties
    let result = pagination(arr, parseInt(req.query.page));
    console.log('Array ',result)
  
    res.json({
      page: parseInt(req.query.page),
      items: result,
      totalItems: result.length,
      totalNum: arr.length
  
   })
    })
  app.get("/faculty/:id",function(req,res){
    let id = +req.params.id;
  
    let index = faculties.findIndex((obj1) => obj1.id === id);
   // console.log(index)
    res.send(faculties[index])
  })
  app.put("/faculty/:id",function(req,res){
    let id = +req.params.id;
    const product = req.body;
    let fac=courses.findIndex((p)=>p.id===id)
   
      courses[fac]=product
      res.send(product)
   
  })
  function pagination(obj, page) {
    const postCount = obj.length;
    const perPage = 10;
    //const pageCount = Math.ceil(postCount / perPage);
    var resArr = obj;
    resArr = resArr.slice(page * 3 - 3, page * 3);
    return resArr;
  }



app.post("/postStudentDetails",function(req,res){
let body=req.body
let maxid=customers.reduce((prev,curr)=>{
  return (prev?.id > curr?.id) ? prev?.id : curr?.id
})
let item={id:maxid+1 ,gender: body.gender,dob: body.dob,gender:body.gender,about:body.about ,courses:[]}
students.push(item)
res.send(item)
})

app.get("/students",function(req,res){
  res.send(students)
})

app.get("/getStudentDetails/:name",function(req,res){
  let name = req.params.name;
  let student=students.find((p)=>{
    return p.name==name
  })
  res.send(student)
})

app.get("/getStudentCourse/:name",function(req,res){
  let name = req.params.name;
  let stud=students.find((p)=>{
    return p.name==name
  })

  let ans= courses.filter((l)=>{
let n=stud.courses.find((k)=>{
  return k==l.name
})
return n
  })
res.send(ans)

})

app.get("/getStudentClass/:name",function(req,res){
  let name = req.params.name;
   
  let stud=students.find((p)=>{
    return p.name==name
  })

  let ans= classes.filter((l)=>{
let n=stud.courses.find((k)=>{
  return k==l.course
})
return n
  })
res.send(ans)
})

app.get("/getFacultyCourse/:name",function(req,res){
  let name=req.params.name
  let fac=faculties.find((p)=>{
    return p.name==name
  })
  let cd=courses.filter((p)=>{
    let n=fac.courses.find((k)=>{
      return k==p.name
    })
    return n
  })
  res.send(cd)
})


app.get("/getFacultyClass/:name",function(req,res){
  let name = req.params.name;
   
  let stud=faculties.find((p)=>{
    return p.name==name
  })
console.log(stud)
  let ans= classes.filter((l)=>{
let n=stud?.courses.find((k)=>{
  return k==l.course
})
console.log(n)
return n
  })
  console.log(ans)
res.send(ans)
})

app.post("/faculty/class",function(req,res){
  let maxid=classes.reduce((prev,curr)=>{
      return (prev. classId > curr.classId) ? prev.classId : curr.classId
  })
  console.log(maxid)
  
  let body={classId:maxid+1, course:req.body.course,time:req.body.time,endTime:req.body.endTime,topic:req.body.topic}
  classes.push(body)
  res.send("register successfully")
})