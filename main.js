name_stud=[];
function submit()
{
    var name_1 = document.getElementById("stud1").value;
    var name_2 = document.getElementById("stud2").value;
    var name_3 = document.getElementById("stud3").value;
    var name_4 = document.getElementById("stud4").value;
    var name_5 = document.getElementById("stud5").value;

    name_stud.push(name_1);
    name_stud.push(name_2);
    name_stud.push(name_3);
    name_stud.push(name_4);
    name_stud.push(name_5);

    console.log(name_stud);

    document.getElementById("display_name").innerHTML=name_stud;
    document.getElementById("submit").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block"; 

    
}

function sorting(){
name_stud.sort();
console.log(name_stud);
document.getElementById("display_name").innerHTML=name_stud;

}