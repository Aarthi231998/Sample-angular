function Sample(){
   //console.log(this)//this refers to the objecct
                     //this which the current function is called
    console.log(this.Sample.store)                 
}
a=30
Sample.store={sno:1, name: "Aarthi"}

Sample()  // window.sample in case of browser
         //  global.sample

         
      