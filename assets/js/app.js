
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const privcv = document.querySelector(".preview-cnt")
const printbtn = document.querySelector(".print-btn-sc")
let formEnd = document.getElementById("formend")
let texthead = document.querySelector(".text-center")
const mainForm = document.getElementById('cv-form');
let imageElem = document.querySelector(".image")
let imageDsp = document.getElementById('image_dsp')
let print = document.querySelector(".print-btn")
let previewcnt = document.querySelector(".preview-cnt")




print.addEventListener("click", () => {
    html2pdf(previewcnt)
})

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepsNum++
        if (formStepsNum === 2) {
            privcv.classList.add("active")
        }
        updateFormSteps()
        updateProgressbar()
    })
})

prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepsNum--
        if (formStepsNum > 0) {
            privcv.classList.remove("active")
        }

        updateFormSteps()
        updateProgressbar()
    })
})

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains('form-step-active') &&
            formStep.classList.remove('form-step-active')
    })
    formSteps[formStepsNum].classList.add('form-step-active')

}


function updateProgressbar() {
    progressSteps.forEach((progressSteps, index) => {
        if (index < formStepsNum + 1) {
            progressSteps.classList.add('progress-step-active')
        } else {
            progressSteps.classList.remove('progress-step-active')
        }

    })

    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


let generateCV = () => {
    let form_controlone = document.getElementById("form-controlone").value
    let lastname = document.querySelector(".lastname").value
    let phone = document.querySelector(".phoneno").value
    let address = document.querySelector(".address").value
    let email = document.querySelector(".email").value
    let sehir = document.querySelector(".summary").value
    let telefon = document.querySelector(".phoneno").value
    let deneyim = document.querySelector(".exp_title").value
    let yetenek = document.querySelector(".skills").value
    let okul = document.querySelector(".edu_school").value
    let fakülte = document.querySelector(".edu_degree").value
    let educity = document.querySelector(".edu_city").value
    let edu_start_date = document.querySelector(".edu_start_date").value
    let edu_graduation_date = document.querySelector(".edu_graduation_date").value
    let projetitle = document.querySelector(".proj_title").value
    let projelink = document.querySelector(".proj_link").value


    let fullname_dsp = document.getElementById("fullname_dsp")
    let addresdsp = document.getElementById("address_dsp")
    let emaildsp = document.getElementById("email_dsp")
    let phonedsp = document.getElementById("phoneno_dsp")
    let sehir_dsp = document.getElementById("summary_dsp")
    let telefon_dsp = document.getElementById("phoneno_dsp")
    let yetenek_dsp = document.getElementById("skills_dsp")
    let deneyim_dsp = document.getElementById("experiences_dsp")
    let okul_dsp = document.getElementById("educations_dsp")
    let proje_dsp = document.getElementById("projects_dsp")






    fullname_dsp.innerHTML = `${form_controlone} ${lastname}`
    phonedsp.innerHTML = phone
    addresdsp.innerHTML = address
    emaildsp.innerText = email
    sehir_dsp.innerHTML = sehir
    telefon_dsp.innerHTML = telefon
    yetenek_dsp.innerHTML = yetenek
    deneyim_dsp.innerHTML = deneyim 
    proje_dsp.innerHTML = projetitle 
    

    

    let fakulte = document.createElement("div")
    fakulte.classList.add("flex")



    let edudatestart = document.createElement("span")
    edudatestart.classList.add("eduDate")
    edudatestart.textContent = edu_start_date

    let edudatesend = document.createElement("span")
    edudatesend.textContent = edu_graduation_date
    edudatesend.classList.add("eduDate")

    let projelinkUrl = document.createElement("div")
    projelinkUrl.textContent = projelink




    fakulte.textContent = `${fakülte} ${educity}`


    okul_dsp.innerHTML = `${okul} `
    okul_dsp.appendChild(fakulte)
    fakulte.appendChild(edudatestart)
    fakulte.appendChild(edudatesend)
    proje_dsp.appendChild(projelinkUrl)

    if(edudatestart.innerHTML.length == 0){
        edudatestart.style.display = "none"
    }
    if(edudatesend.innerHTML.length == 0){
        edudatesend.style.display = "none"
    }


}


window.onload = function () {
    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

function previewImage() { 
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function (ofEvent) {
        imageDsp.src = ofEvent.target.result;
    }
}