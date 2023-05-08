const array = ['Amrut','Rishab', 'Supriya', 'Anupam', 'Sameer', 'Yogesh'];
function common(){
    document.getElementById("ex1qa").innerHTML="The array given is";
    let text="<ul>"
    array.forEach(display)
    
    function display(val){
        text+="<li>"+val+"</li>";
    }
    text+="</ul>";
    document.getElementById("ex1q").innerHTML=text;
}
function ex1(){
    common();
    document.getElementById("ex1qb").innerHTML="Answer is";

    let res=0;
    array.forEach((value,index)=>{
        if(value==='Supriya'){
            res=index;
        }
    });
    document.getElementById("ex1a").innerHTML=res;
    //document.getElementById("ex1exp").innerHTML="Declare a variable for result, iterate over array using for each. If supriya is found set result with index of that array";



}
function ex1d(){
    document.getElementById("ex1qa").innerHTML="Example1";

    document.getElementById("ex1q").innerHTML='';
    document.getElementById("ex1qb").innerHTML="";

    document.getElementById("ex1a").innerHTML='';
}

function ex2(){
    common();
    var moveIndex=9999;
    const newarr=array.map((value,index)=>{
            if (value==='Supriya' && moveIndex===9999){
                moveIndex=index+1;
                return array[index+1];
            }
            if(index===moveIndex){
                moveIndex=0;
                return 'Supriya'
            }
            return value;
    })
    let text="<ul>"
    newarr.forEach(display)
    
    function display(val){
        text+="<li>"+val+"</li>";
    }
    text+="</ul>";
    document.getElementById("ex2a").innerHTML=text;
   
}
function ex2d(){

    document.getElementById("ex1q").innerHTML='';
    document.getElementById("ex1qa").innerHTML="";

    document.getElementById("ex2a").innerHTML='';
}

function ex3(){
    common();
    let text="<ul>"
    const filt=array.filter(filtfunc);

    function filtfunc(val){
      if (val==='Supriya'){
  
      }else{
          return val;
      }
    }
    filt.forEach(display)
    
    function display(val){
        text+="<li>"+val+"</li>";
    }
    text+="</ul>";

    document.getElementById("ex3a").innerHTML=text;
}
function ex3d(){

    document.getElementById("ex1q").innerHTML='';
    document.getElementById("ex1qa").innerHTML="";

    document.getElementById("ex3a").innerHTML='';
}


const arrayObjs = [{"id":1,"name":"Amrut"},{"id":10,"name":"Rishab"},{"id":2,"name":"Supriya"},{"id":3,"name":"Sameer"},{"id":4,"name":"Yogesh"}]

function common(){
    document.getElementById("exa1qa").innerHTML="The object given is";
    let text="<ul>"
    arrayObjs.forEach(display)
    
    function display(val){
        text+="<li>"+val.id+" "+val.name+"</li>";
    }
    text+="</ul>";
    document.getElementById("exa1q").innerHTML=text;
}
function exa1(){
    common();
    var objindex=0;
    arrayObjs.forEach((value,index)=>{
        if (value.name==='Supriya'){
            objindex=index;
        }
    
    })
    document.getElementById("exa1a").innerHTML=objindex;
}
function exa1d(){
 
    document.getElementById("exa1a").innerHTML='';
   
}
function exa2(){
    common();
    temp=9999;
    let tempobj=null;
    const newobj=arrayObjs.map((value,index)=>{
      
        if(value.name==='Supriya' && temp===9999){
            tempobj=arrayObjs[index];
            temp=index+1;
            return arrayObjs[index+1];
        }
        if(temp===index){
            return tempobj;
        }
        return value;
    });
    let text="<ul>"
    newobj.forEach(display)
    
    function display(val){
        text+="<li>"+val.id+" "+val.name+"</li>";
    }
    text+="</ul>";
    document.getElementById("exa2a").innerHTML=text;
   
}
function exa2d(){
 
    document.getElementById("exa2a").innerHTML='';
   
}

function exa3(){
    common();
    const filtobj=arrayObjs.filter((value,index)=>{
        if(value.name==='Supriya'){
    
        }
        else{
            return value;
        }
    })

    let text="<ul>"
    filtobj.forEach(display)
    
    function display(val){
        text+="<li>"+val.id+" "+val.name+"</li>";
    }
    text+="</ul>";
    document.getElementById("exa3a").innerHTML=text;
   
}
function exa3d(){
 
    document.getElementById("exa3a").innerHTML='';
   
}
function exa4(){
    common();
    const newObj={"id":5,"name":"Sam"};
    arrayObjs.push(newObj);
    let text="<ul>"
    arrayObjs.forEach(display)
    
    function display(val){
        text+="<li>"+val.id+" "+val.name+"</li>";
    }
    text+="</ul>";
    document.getElementById("exa4a").innerHTML=text;
   
}
function exa4d(){
 
    document.getElementById("exa4a").innerHTML='';
   
}
const arrayObjss = [
    {"id": 1, "name": "Amrut", "address": [{"lane1": "BVB", "lane2": "Hubli"}]},
    {"id": 2, "name": "Supriya", "address": [{"lane1": "BVB", "lane2": "Dadar"}]},
    {"id": 3, "name": "Sameer", "address": [{"lane1": "BVB", "lane2": "Hubli"}]},
    {"id": 4, "name": "Yogesh", "address": [{"lane1": "BVB", "lane2": "Dharwad"}]}
  ];
  function exa5(){
 
    const hubli = arrayObjss.filter(obj =>
        obj.address.some(addr => addr.lane2 === "Hubli")
      );
    let text="<ul>"
    hubli.forEach(display)
    
    function display(val){
        text+="<li>"+val.name+"</li>";
    }
    text+="</ul>";
    document.getElementById("exa5a").innerHTML=text;
   
}
function exa5d(){
 
    document.getElementById("exa5a").innerHTML='';
   
}


  




