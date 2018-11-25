declare const $;
const url = "https://api.adp.ng";
const xhr = new XMLHttpRequest();

// console.log(location.origin)
$(document).ready(function() {
  const hashList = ["#home", "#about", "#volunteer"]
  if (location.hash === hashList[0] || !location.hash) {
    start.newAc().then((ret: boolean) => {
      if (ret === true) start.home();
    });
  }
  if (location.hash === hashList[1]) {
    start.newAc().then((ret: boolean) => {
      if (ret === true) start.about();
    });
  }
  if (location.hash === hashList[2]) {
    start.newAc().then((ret: boolean) => {
      if (ret === true) start.volunteer();
    });
  }


  let states = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
  'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
  'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
  'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
   'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];


 let formLocation = document.getElementById('location');
 states.forEach(element => {
  let optio = document.createElement('option');
  optio.value = element;
  optio.innerText = element
  formLocation.appendChild(optio)
  });
});

document.querySelector('#volunteerForm').addEventListener('submit', (event) => {
  event.preventDefault();

  let $btn = $('.btn');
  let loadingText = "<i class='fa fa-spinner fa-spin'></i> Submitting";
  if ($btn.html() !== loadingText) {
    $btn.data('original-text', $btn.html());
    $btn.attr('disabled', true)
    $btn.html(loadingText)
  }

  const forms = new FormData();
  xhr.open("POST", url + '/volunteer', true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  let getValue = document.getElementById("volunteerForm").querySelectorAll("input");

  xhr.onreadystatechange = function(e) {
    if (xhr.readyState == 4) {
      $btn.attr('disabled', false);
      $btn.data('original-text', $btn.html())
    }
  }


  getValue.forEach((v, i) => {
    forms.append(getValue[i].name, getValue[i].value);
  });

  xhr.send(forms);
});


let donateForm = document.getElementById("donateForm");
let email = document.getElementById("email");
let amount = document.getElementById("amount");
let fullNameDN = document.getElementById("fullName");
donateForm.addEventListener("keyup", (e) => {  
  if (email.value && fullNameDN.value && amount.value) {
    document.getElementById("donateSubmit").removeAttribute('disabled');
  } else {
    document.getElementById("donateSubmit").setAttribute('disabled', 'true');

  }
})

let fullName: NodeListOf<any> = document.getElementsByName("fullName");
fullName.forEach((fn: HTMLInputElement) => {
  fn.addEventListener("blur", e => {
    if (!fn.value || fn.value.length <= 2) {
      fn.classList.add("is-invalid");
      fn.classList.remove("is-valid");
      fn.nextElementSibling.innerHTML = "Please provide a valid name";
      fn.nextElementSibling.classList.add("text-danger");
    } else {
      fn.classList.add("is-valid");
      fn.classList.remove("is-invalid");
      fn.nextElementSibling.innerHTML = "";
    }
  });
});

document.querySelectorAll(".menu a").forEach(mn => {
  mn.addEventListener("click", function(e: any) {
    if (document.location.href === e.target.href) return;
    e.preventDefault()
    let coming = new Change(document.location.hash);

    coming.newAc().then((el: boolean) => {
      if (el === true) document.location.href = e.target.href;
    });
  });
});

window.addEventListener(
  "hashchange",
  function(e) {
    const hashList = ["#home", "#about", "#volunteer"]
    if (this.location.hash === hashList[0] || !this.location.hash) {
      start.newAc().then((ret: boolean) => {
        if (ret === true) start.home();
      });
    }
    if (this.location.hash === hashList[1]) {
      start.newAc().then((ret: boolean) => {
        if (ret === true) start.about();
      });
    }
    if (this.location.hash === hashList[2]) {
      start.newAc().then((ret: boolean) => {
        if (ret === true) start.volunteer();
      });
    }

    if (hashList.indexOf(this.location.hash) === -1) console.log('noting')
  },
  false
);

class Change {
  constructor(private action?: string) {
    this.newAc();
  }
  async newAc() {
    $(".page")
      .fadeOut("slow")
      .removeClass("d-flex");
    return await true;
  }
  home() {
    $("#firstImg").hide();

    $("#home")
      .fadeIn("slow")
      .addClass("d-flex");
    $("#firstImg").fadeIn(2000);
    $("#showNow").addClass("hide-text");
  }

  about() {
    $("#about")
      .fadeIn("slow")
      .addClass("d-flex");
  }

  volunteer() {
    $("#volunteer")
      .fadeIn("slow")
      .addClass("d-flex");
  }
}

const start = new Change();
