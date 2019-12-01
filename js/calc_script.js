document.addEventListener('DOMContentLoaded', function () {

    //dropdown
    x = document.getElementsByClassName("select__option");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        a = document.createElement("DIV");
        a.setAttribute("class", "select__selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select__items select__hide");
        for (j = 1; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select__hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        const arrNo = [];
        x = document.getElementsByClassName("select__items");
        y = document.getElementsByClassName("select__selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select__hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);




    //kolorystyka
    const selectSelected = document.querySelector('.select__selected');
    const selectOtions = document.querySelector('.select__items');
    const calcArrow = document.querySelector(".calc__arrow");



    selectSelected.addEventListener("click", function () {
        calcArrow.classList.toggle("transform__rotate");
        selectSelected.classList.toggle("select__border");
    });
    selectOtions.addEventListener("click", function () {
        selectSelected.classList.add("select__color");
    });
    document.addEventListener("click", function () {
        selectSelected.classList.remove("select__border");
        calcArrow.classList.remove("transform__rotate");
    });



    const inputProducts = document.querySelector("#products");
    const inputOrder = document.querySelector("#orders");

    const valueProducts = document.querySelector(".value__products");
    const costProducts = document.querySelector(".cost__products");
    const valueOrders = document.querySelector(".value__orders");
    const costOrders = document.querySelector(".cost__orders");
    const valuePackage = document.querySelector(".value__package");
    const costPackage = document.querySelector(".cost__package");

    const costAccounting = document.querySelector(".cost__accounting");
    const costTerminal = document.querySelector(".cost__terminal");
    const costTotal = document.querySelector(".cost__total");

    const checkboxOne = document.querySelector(".checkbox__one");
    const checkboxSecond = document.querySelector(".checkbox__second");



    let cost1 = '';
    let cost2 = '';
    let cost3 = '';
    let cost4 = '';
    let cost5 = '';

    inputProducts.addEventListener('keyup', function () {
        const number = this.value;
        let total = "";
        if (number < 0) {
            alert("wpisz dodatnią wartość!")
        } else {
            valueProducts.innerText = `${number} * 2$`;
            costProducts.innerText = number * 2;
            total = (number * 2);
        };

        cost1 = number * 2;
        costTotal.innerText = (cost1 + cost2 + cost3 + cost4 + cost5);
    });



    inputOrder.addEventListener('keyup', function () {
        const number = this.value;
        let total = "";
        if (number < 0) {
            alert("wpisz dodatnią wartość!")
        } else {
            valueOrders.innerText = `${number} * 1$`
            costOrders.innerText = number * 1
            total = (number * 1)
        }
        cost2 = number * 1;
        costTotal.innerText = (cost1 + cost2 + cost3 + cost4 + cost5);
    });


    selectSelected.addEventListener('click', function () {
        const number = this.innerText;

        if (number == 'Basic') {
            valuePackage.innerText = number
            costPackage.innerText = "0"
            cost3 = 0;
        } else if (number == 'Professional') {
            valuePackage.innerText = number
            costPackage.innerText = "25"
            cost3 = 25;
        } else if (number == 'Premium') {
            valuePackage.innerText = number
            costPackage.innerText = "60"
            cost3 = 60;
        } else {
            costPackage.innerText = "0"
            cost3 = 0;
        }
        costTotal.innerText = (cost1 + cost2 + cost3 + cost4 + cost5);
    })


    checkboxOne.addEventListener('click', function () {
        if (this.checked) {
            costAccounting.innerText = "5"
            cost4 = 5;
        } else {
            costAccounting.innerText = "0"
            cost4 = 0;
        }
        costTotal.innerText = (cost1 + cost2 + cost3 + cost4 + cost5);
    });
    checkboxSecond.addEventListener('click', function () {
        if (this.checked) {
            costTerminal.innerText = "2"
            cost5 = 2;
        } else {
            costTerminal.innerText = "0"
            cost5 = 0;
        }
        costTotal.innerText = (cost1 + cost2 + cost3 + cost4 + cost5);
    });
});