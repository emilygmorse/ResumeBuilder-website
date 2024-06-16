const textarea = document.querySelector("textarea")
const addBtn = document.getElementById("addNewBtn")
const resumeContainer = document.querySelector(".resumeContainer")

let resumeList = []

function initialLoad() {
    if (!localStorage.getItem('resumes')) {return}
    resumeList = JSON.parse(localStorage.getItem('resumes')).resumeList
    updateUI()
}

initialLoad()

function addresume() {
    const resume = textarea.value
    if(!resume) { return }
    console.log("Added resume", resume)
    resumeList.push(resume)
    textarea.value = ""
    updateUI()
}

function editresume(index) {
    textarea.value = resumeList[index]
    resumeList = resumeList.filter((element, elementIndex) => {
        return index!=elementIndex
    })
    updateUI()
}

function deleteresume(index) {
    resumeList = resumeList.slice(0, index).concat(resumeList.slice(index + 1))
    updateUI()
}

function updateUI() {
    let newInnerHTML = ""
    resumeList.forEach((resumeElement, resumeIndex) => {
        newInnerHTML += 
        `<div class="resume">
            <p>${resumeElement}</p>
            <div class="btnContainer">
                <button class="iconBtn" onclick="editresume(${resumeIndex})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="iconBtn" onclick="deleteresume(${resumeIndex})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>`
    })

    resumeContainer.innerHTML = newInnerHTML
    //to save to local storage
    localStorage.setItem('resumes', JSON.stringify({resumeList}))
}



addBtn.addEventListener('click', addresume)