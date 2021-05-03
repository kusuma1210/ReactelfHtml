// Ex using jsx
// const element=<h1>hello jsx</h1>;
// ReactDOM.render(element,document.getElementById("root"));

// //ex 2 wihout using jsx i.e Recat.creatElement()

//  const element1=React.createElement('h1',"null",'hello jsx using method');
//  ReactDOM.render(element1,document.getElementById("root"));

// //ex 3 jsx using expression
// const pname="kusuma";
// const pelement=<h2>hi, miss .{pname}</h2>;
// ReactDOM.render(pelement,document.getElementById("root"));

//ex 4 jsx with function

// function Employee(user){
//   return user.fname+user.lname;

// }
// const user ={
//   fname:'charlie',
//   lname:'smith'

// };
//  const empDetails=<h1>hello,{Employee(user)}</h1>;
//  ReactDOM.render(empDetails,document.getElementById("root"));

 //ex 5
//  function clock(){
//    let element=(
//      <div>
//        <h1>Hello Welcome</h1>
//        <h2>the time is {new Date().toLocaleTimeString()}</h2>
     
//      </div>
     

//    );
//   ReactDOM.render(element,document.getElementById("root"));
//  }
//  setInterval(clock,1000);


 //ex 6 using react.createelement() with class and id name
//  const jsxElement=React.createElement(
//    'h1',//type
//    {className:'test',id:"demo"},//props.className
//    "life is beautiful"//props.children
//  );
//  console.log("jsx Element is",jsxElement);
//  ReactDOM.render(jsxElement,document.getElementById("root"));


//ex 7 creating multiple elements using React.createElement()
// const ele=React.createElement("h1",
// null,
// React.createElement("p",null,"always stay positive"));
// console.log(ele)
// ReactDOM.render(ele,document.getElementById("root"));


// const ele1=React.createElement("ul",
// {id:"menu"},
// React.createElement("li",{className:"sweets"},"gulab jamun"));
// console.log(ele1);
// ReactDOM.render(ele1,document.getElementById("root"));



