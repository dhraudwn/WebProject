let result = '';

function checkSelectAll(checkbox)  {
    const selectall = document.querySelector('input[name="menu_all"]');
    
    if(checkbox.checked === false)  {
        selectall.checked = false;
    }
    
    menuResult();
}

function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('menu');
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })

    menuResult();
}

function resetCheckbox(){
    const selectall = document.querySelector('input[name="menu_all"]');
    selectall.checked = false;
    selectAll(selectall);

    menuResult();
}

// 출력

function menuResult(){
    const query = 'input[name="menu"]:checked';
    const selectedEls = 
    document.querySelectorAll(query);
    
    result = '';
    // 선택된 목록에서 value 찾기
    selectedEls.forEach((el) => {
        result += el.value + ', ';
    });
    result = result.slice(0, -2);
    // 출력
    if(result.length === 0){
        document.getElementById('result').innerText = result;
        return;
    }
    document.getElementById('result').innerText = result + ' 메뉴를 추천드려요 :D';

}

function complete(){
    result = result.replace(/, /g, "+");
    var url = location.href;
    var parameters = url.slice(url.indexOf('?') + 1, url.length);
    result = encodeURI(result);
    location.href = "result.html?"+parameters+"&menu="+result;
}