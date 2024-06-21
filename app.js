let value = true;


function plus_btn(e) {
    let singleRowMain = e.closest('.single_row_main');
    let plusBtn = singleRowMain.querySelector('.plus_btn');
    let hiddenDiv = singleRowMain.querySelector('.hidden_div');
    let iconArrow = singleRowMain.querySelector('.icon_arrow');
    
    if (value == true) {
        plusBtn.classList.add('rotate-180');
        plusBtn.classList.add('bg-[#000]');
        iconArrow.classList.add('!text-[#fff]');
        hiddenDiv.classList.add('!block');
        value = false;
    }else{
        plusBtn.classList.remove('rotate-180');
        iconArrow.classList.remove('!text-[#fff]');
        plusBtn.classList.remove('bg-[#000]');
        hiddenDiv.classList.remove('!block');
        value = true;
    }
}