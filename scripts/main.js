var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var url = "https://api.adp.ng";
var xhr = new XMLHttpRequest();
// console.log(location.origin)
$(document).ready(function () {
    var hashList = ["#home", "#about", "#volunteer"];
    if (location.hash === hashList[0] || !location.hash) {
        start.newAc().then(function (ret) {
            if (ret === true)
                start.home();
        });
    }
    if (location.hash === hashList[1]) {
        start.newAc().then(function (ret) {
            if (ret === true)
                start.about();
        });
    }
    if (location.hash === hashList[2]) {
        start.newAc().then(function (ret) {
            if (ret === true)
                start.volunteer();
        });
    }
    var states = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
        'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
        'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
        'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
        'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];
    var formLocation = document.getElementById('location');
    states.forEach(function (element) {
        var optio = document.createElement('option');
        optio.value = element;
        optio.innerText = element;
        formLocation.appendChild(optio);
    });
});
document.querySelector('#volunteerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var $btn = $('.btn');
    var loadingText = "<i class='fa fa-spinner fa-spin'></i> Submitting";
    if ($btn.html() !== loadingText) {
        $btn.data('original-text', $btn.html());
        $btn.attr('disabled', true);
        $btn.html(loadingText);
    }
    var forms = new FormData();
    xhr.open("POST", url + '/volunteer', true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    var getValue = document.getElementById("volunteerForm").querySelectorAll("input");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            $btn.attr('disabled', false);
            $btn.data('original-text', $btn.html());
        }
    };
    getValue.forEach(function (v, i) {
        forms.append(getValue[i].name, getValue[i].value);
    });
    xhr.send(forms);
});
var donateForm = document.getElementById("donateForm");
var email = document.getElementById("email");
var amount = document.getElementById("amount");
var fullNameDN = document.getElementById("fullName");
donateForm.addEventListener("keyup", function (e) {
    if (email.value && fullNameDN.value && amount.value) {
        document.getElementById("donateSubmit").removeAttribute('disabled');
    }
    else {
        document.getElementById("donateSubmit").setAttribute('disabled', 'true');
    }
});
var fullName = document.getElementsByName("fullName");
fullName.forEach(function (fn) {
    fn.addEventListener("blur", function (e) {
        if (!fn.value || fn.value.length <= 2) {
            fn.classList.add("is-invalid");
            fn.classList.remove("is-valid");
            fn.nextElementSibling.innerHTML = "Please provide a valid name";
            fn.nextElementSibling.classList.add("text-danger");
        }
        else {
            fn.classList.add("is-valid");
            fn.classList.remove("is-invalid");
            fn.nextElementSibling.innerHTML = "";
        }
    });
});
document.querySelectorAll(".menu a").forEach(function (mn) {
    mn.addEventListener("click", function (e) {
        if (document.location.href === e.target.href)
            return;
        e.preventDefault();
        var coming = new Change(document.location.hash);
        coming.newAc().then(function (el) {
            if (el === true)
                document.location.href = e.target.href;
        });
    });
});
window.addEventListener("hashchange", function (e) {
    var hashList = ["#home", "#about", "#volunteer"];
    if (this.location.hash === hashList[0] || !this.location.hash) {
        start.newAc().then(function (ret) {
            if (ret === true)
                start.home();
        });
    }
    if (this.location.hash === hashList[1]) {
        start.newAc().then(function (ret) {
            if (ret === true)
                start.about();
        });
    }
    if (this.location.hash === hashList[2]) {
        start.newAc().then(function (ret) {
            if (ret === true)
                start.volunteer();
        });
    }
    if (hashList.indexOf(this.location.hash) === -1)
        console.log('noting');
}, false);
var Change = /** @class */ (function () {
    function Change(action) {
        this.action = action;
        this.newAc();
    }
    Change.prototype.newAc = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $(".page")
                            .fadeOut("slow")
                            .removeClass("d-flex");
                        return [4 /*yield*/, true];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Change.prototype.home = function () {
        $("#firstImg").hide();
        $("#home")
            .fadeIn("slow")
            .addClass("d-flex");
        $("#firstImg").fadeIn(2000);
        $("#showNow").addClass("hide-text");
    };
    Change.prototype.about = function () {
        $("#about")
            .fadeIn("slow")
            .addClass("d-flex");
    };
    Change.prototype.volunteer = function () {
        $("#volunteer")
            .fadeIn("slow")
            .addClass("d-flex");
    };
    return Change;
}());
var start = new Change();
