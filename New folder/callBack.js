function callback(name, age, task){
    console.log(name);
    console.log(age);
    task();

}
function takefood(){
console.log('learning');
}
function takeshore(){
    console.log('do something');
}

callback('alamgir', 25, takefood);
callback('jogir uddin', 25, takeshore );