function fetch(file,callback){
    var htp = new XMLHttpRequest();
    htp.overrideMimeType("application/json");
    htp.open('GET',file,true)
    htp.onreadystatechange = function(){
        if(htp.readyState===4 && htp.status=='200'){
            callback(htp.responseText);
        }
    }
    htp.send(null);
}
fetch("dynamic.json",function(text){
    let data = JSON.parse(text);
    console.log(data);
    details(data.details)
    academics(data.academics);
    edudet(data.edu);
    list(data.languages);
    sk(data.skills);
})

var left = document.querySelector(".left");
function details(p){
    var pimage = document.createElement("img");
    pimage.src = p.img;
    left.appendChild(pimage);

    var name = document.createElement("h2");
    name.textContent = p.name;
    left.appendChild(name);

    var line = document.createElement("hr");
    left.appendChild(line);

    var roll = document.createElement("p");
    roll.textContent = p.roll;
    left.appendChild(roll);

    var city = document.createElement("p");
    city.textContent = p.place;
    left.appendChild(city);   
}

var right = document.querySelector(".right");
function academics(q){
    var career = document.createElement("h2");
    career.textContent = q.Co;
    right.appendChild(career)
    var obj = document.createElement("h4");
    obj.textContent = q.info;
    right.appendChild(obj);
    var hline = document.createElement("hr");
    right.appendChild(hline);
    
}

function edudet(r){
    var edd = document.createElement("h3");
    edd.innerHTML = "Education Details :";
    right.appendChild(edd);
    var tab = document.createElement("table");
    tab.border = '1';
    var tr1 = "<tr><td>s.no</td><td>Institute</td><td>Degree</td><td>GPA</td><td>year</td>";
    var tr2 = "";
    for(i=0;i<r.length;i++){
        tr2 = tr2 + "<tr><td>"+ r[i].s +"</td><td>"+r[i].institute+"</td><td>"+r[i].degree+"</td><td>"+r[i].CGPA+"</td><td>"+r[i].year+"</td></tr>";
    }
    tab.innerHTML = tr1+tr2;
    right.appendChild(tab);
}
function list(s){
    var lang = document.createElement("ul");
    var l = document.createElement("h2");
    l.innerHTML = "Languages:";
    right.appendChild(l);
    for (i=0;i<s.length;i++){
        var sub = document.createElement("li");
        sub.textContent = s[i];
        lang.appendChild(sub);
    }
    right.appendChild(lang);

}
function sk(t){
    var skill = document.createElement("ul");
    var skills = document.createElement("h2");
    skills.innerHTML = "Skills:";
    right.appendChild(skills);
    for (i=0;i<t.length;i++){
        var sub = document.createElement("li");
        sub.textContent = t[i];
        skill.appendChild(sub);
    }
    right.appendChild(skill);

}