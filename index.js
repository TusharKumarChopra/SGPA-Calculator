
const text = document.querySelector("#text");
const submit = document.querySelector(".btn");
const box = document.querySelector(".box");
const enter = document.createElement("input");
const SGPA = document.createElement("input");
const fields = document.querySelector(".fields");

function grades(mark) {
    if (mark >= 90)
        return 10
    else if (mark < 90 && mark >= 80)
        return 9
    else if (mark < 80 && mark >= 70)
        return 8
    else if (mark < 70 && mark >= 60)
        return 7
    else if (mark < 60 && mark >= 50)
        return 6
    else if (mark < 50 && mark >= 45)
        return 5
    else
        return 4
}

submit.addEventListener("click", () => {
    const noOfSubjects = parseInt(text.value);

    for (let i = 0; i < noOfSubjects; i++) {
        const subject = document.createElement("input");
        const credits = document.createElement("input");
        const subjectLabel = document.createElement("label");
        subject.placeholder = "marks";
        credits.placeholder = "credits";
        subject.type = "text";
        credits.type = "number";
        subject.name = "subject" + (i + 1);
        subjectLabel.textContent = "subject" + (i + 1);
        subject.classList.add("subjects");
        credits.classList.add("credits");
        box.appendChild(subjectLabel);
        box.appendChild(subject);
        box.appendChild(credits);
        box.appendChild(document.createElement("br"));
        fields.appendChild(subjectLabel);
        fields.appendChild(subject);
        fields.appendChild(credits);
    }
    enter.type = "button";
    enter.value = "Enter";
    enter.classList.add("btn");
    // enter.style.marginLeft = "35%";
    box.appendChild(enter);
    fields.appendChild(enter);
});



enter.addEventListener("click", () => {
    const subjectInputs = document.querySelectorAll(".subjects");
    const creditInputs = document.querySelectorAll(".credits");
    creds = [];
    marks = []; // Clear the marks array before updating it
    grade = [];
    subjectInputs.forEach(subjectInput => {
        marks.push(subjectInput.value);
    });
    creditInputs.forEach(creditInputs => {
        creds.push(creditInputs.value);
    });

    for (i = 0; i < marks.length; i++) {
        grade.push(grades(marks[i]));
    }
    enter.style.display = 'none';
    SGPA.type = "button";
    SGPA.value = "Generate Sgpa";
    SGPA.classList.add("btn");
    // SGPA.style.marginLeft = "35%";
    // SGPA.style.width = "33%";
    SGPA.style.height = "5%";
    box.appendChild(SGPA);
    fields.appendChild(SGPA);
});

function total(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + parseFloat(arr[i]);
    }
    return sum;
}

SGPA.addEventListener("click", () => {
    const display = document.getElementById("sgpa");
    totalcreds = total(creds);
    totalPoints = 0;
    for (i = 0; i < grade.length; i++) {
        totalPoints = parseFloat(totalPoints) + (parseFloat(grade[i]) * parseFloat(creds[i]));
    }
    sgpa = parseFloat(totalPoints) / parseFloat(totalcreds);
    sgpa = Math.round((sgpa + Number.EPSILON) * 100) / 100; //To round to 2 decimal places
    // console.log(sgpa);
    box.style.height = "300px";
    fields.style.display = "none";
    SGPA.style.display = "none";
    display.textContent = "Your SGPA is : " + sgpa;


});

