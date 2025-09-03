const form = document.getElementById('myForm')
const nameInput = document.getElementById('name')
const nameError = document.getElementById('nameError')
const mailInput = document.querySelector("#mail")
const mailError = document.querySelector("#mailError")
const phNumberInput = document.getElementById('phNumber')
const phNumberError = document.getElementById('phNumberError')
const budgerInput = document.getElementById('budget')
const budgerError = document.getElementById('budgetError')
const goalsInput = document.getElementById('goals');
const goalsError = document.getElementById('goalsError')
const popUp =document.getElementById('popUp')

 form.addEventListener('submit',function(e){
      e.preventDefault();  
      

      let valid = true;

      nameError.textContent="";
      nameInput.classList.remove("error-border")
      mailError.textContent="";
      mailInput.classList.remove("error-border")
      phNumberError.textContent="";
      phNumberInput.classList.remove("error-border")
      budgerError.textContent = "";
      budgerInput.classList.remove('error-border')
      goalsError.textContent =""
      goalsInput.classList.remove('error-border')



      if(nameInput.value.trim() ===""){
        nameError.textContent = "Name is required";
        nameInput.classList.add('error-border')
        valid = false;
      }
      if(mailInput.value.trim() ===""){
        mailError.textContent = "Mail is required";
        mailInput.classList.add("error-border")
        valid =false;
      }
    //   }else if(/\s+@\s+\.\s/.test(mailInput.value))
    //   {
    //     mailError.textContent="Invalid mail"
    //     mailInput.classList.add("error-border");
    //     valid= false;
        
    //   }
      if(phNumberInput.value.trim() === ""){
        phNumberError.textContent = "Phone Number is requied";
        phNumberInput.classList.add('error-border')
        valid = false;
      }
      if(budgerInput.value.trim() === ""){
        budgerError.textContent = "Budget is required"
        budgerInput.classList.add('error-border')
      }
      if(goalsInput.value.trim() === ""){
        goalsError.textContent = "Goals are required"
        goalsInput.classList.add("error-border")
      }
      









      if(valid)
      {
         popUp.classList.add("show"); // show popup
      }
    //    function closepopup(){
    //     popUp.classList.remove('show')
    //    }
 })