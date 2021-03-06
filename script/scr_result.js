var door;
var menu;
function getParmeter(){
    var url = decodeURI(location.href);
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
    var doors = parameters[0].split('=');
    door = doors[1].split('+');
    var menus = parameters[1].split('=');
    menu = menus[1].split('+');
    print();
}

function print(){
    var final='';
    door.forEach(element => {
        final = final + element+', ';
    });
    final = final.slice(0, -2) + "에서 ";
    menu.forEach(element => {
        final = final + element+', ';
    });
    final = final.slice(0, -2) + "메뉴를 추천한 결과입니다:D";

    document.getElementById('final').innerText = final;
}



function result(){
    // 위치, 이름, 주소 형태. 종류 : 한식-0 일식-1 중식-2 양식-3 패스트푸드-4 기타-5
    var menuAll = ["한식", "일식", "중식", "양식", "패스트푸드", "기타"];
    var menuIdx = [];
    menu.forEach(function(m){
        menuIdx.push(menuAll.indexOf(m));
    });

    var north = [[0, "고니식탁","대구 북구 산격로6길 29"], [5, "뉴살라딘","대구 북구 대학로 79"], [0,"유가네 닭갈비","대구 북구 대학로17길 8"], [5, "반미리코", "대구 북구 대학로23길 7"],
                [3, "META PIZZA", "대구 북구 대학로 103"], [1, "마사", "대구 북구 산격로6길 18"], [5, "BBB", "대구 북구 대학로17길 16"], [3, "미들31", "대구 북구 대학로23길 11"],
                [0, "한끼갈비","대구 북구 대학로17길 7-1 한끼갈비"], [4, "서브웨이", "대구 북구 대학로 87"], [2, "모임맛집", "대구 북구 대학로23길 28"], [3, "벨로", "대구 북구 대학로23길 13"],
                [0, "면탐정", "대구 북구 대학로15길 15"], [0, "봉대박찜닭", "대구 북구 대학로23길 16-1"], [1, "고운라멘", "대구 북구 대학로23길 20-1"], [1, "잇토사이야", "대구 북구 대학로23길 19-6"],
                [3, "앞치마 입는 남자", "대구 북구 산격로10길 37"], [3, "낭만놀이", "대구 북구 대학로23길 18-9"], [4, "맘스터치", "대구 북구 대학로17길 5"], [3, "팰럿", "대구 북구 대학로17길 15"],
                [5, "인도방랑기", "대구 북구 대학로 81"], [0, "나린찜닭", "대구 북구 대학로 65"], [2, "저스트마라관", "대구 북구 대학로13길 20-1"], [2, "깐담", "대구 북구 대학로13길 1"], 
                [2, "칭베이", "대구 북구 산격로6길 14"], [2, "불간짬뽕", "대구 북구 대동로6길 39"], [1, "도토리1", "산격3동 1331-6"], [1, "다이와스시", "대구 북구 산격로8길 23-1"], 
                [1, "나이스샤워", "대구 북구 대학로13길 20"], [1, "고씨네", "대구 북구 대학로23길 26"], [3, "림터", "대구 북구 대학로13길 3"], [3, "테이크어바이트", "대구 북구 대학로23길 30"],
                [4, "에그셀런트", "대구 북구 대동로6길 39"], [3, "홍대함바그", "대구 북구 대학로23길 19-4"], [0, "현풍닭칼국수", "대구 북구 대학로 105"], [0, "소를품은연어", "대구 북구 산격로8길 31"]];

    var east = [[0, "색계찜닭", "대구 북구 경대로 95"], [0, "미소찜닭", "대구 북구 경대로19길 30"], [0, "나나찜닭", "대구 북구 경진로12길 28"], [0, "금상갈비촌", "대구 북구 경대로 109"],
                [2, "황금성", "대구 북구 경대로17길 38-1"], [2, "기황후", "대구 북구 경대로 101"], [4, "다이나믹키친", "대구 북구 경대로19길 1"], [5, "스톡홀름 샐러드", "대구 동구 경대로 80"], 
                [4, "다니상점", "대구 동구 신암북로7길 99"], [1, "정돈카츠", "대구 동구 아양로7길 71"], [0, "다래분식", "대구 북구 경대로17길 2"], [0, "삼용식당", "대구 북구 경대로19길 3"],
                [2, "경복짬뽕전문", "대구 북구 경대로19길 5"], [5, "조아라 떡볶이 & 닭강정", "대구 북구 경대로19길 17"], [0, "찬누리식당", "대구 북구 경대로17길 42-1"], [1, "우연 희", "대구 북구 경대로 95"],
                [1, "참치이야기", "대구 북구 동북로 284"]];
                
    var south = [[2, "경대루반점", "대구 북구 대현로19길 84"],[4, "풍성호", "대구 북구 경대로 37"],[0,"모이다식탁", "대구 북구 경대로7길 2"], [0, "성화식당", "대구 북구 경대로5길 10"],
                [2, "저스트마라관", "대구 북구 경대로7길 14"], [0, "맛찜", "대구 북구 경대로7길 16"], [0, "장터국밥", "대구 북구 경대로7길 38"], [4, "맘스터치", "대구 북구 경대로7길 36"], 
                [1, "정식당", "대구 북구 대현로21길 40-15"], [1, "초밥집", "대구 북구 경대로7길 29"], [1, "혼덮밥", "대구 북구 대현로19길 82"], [1, "다이마루", "대구 북구 대현로19길 28"],
                [2, "짬마담", "대구 북구 경대로5길 34"], [0, "뽀근닥", "대구 북구 경대로7길 34"], [3, "그린팔레트", "대구 동구 경대로 58"], [3, "핏짜보르도", "대구 동구 경대로 58"], 
                [3, "부리또익스프레스앤모어", "대구 북구 대현로19길 30-1"], [3, "몽땅", "대구 북구 대현로19길 5-2"]];

    var resList = [];
    for(var i = 0; i < menuIdx.length; i++){
        if(door.indexOf("북문") !== -1){
            north.forEach(element => {
                if(element[0] === menuIdx[i]){
                    resList.push(element);
                }
            });
        }
        if(door.indexOf("동문") !== -1){
            east.forEach(element => {
                if(element[0] === menuIdx[i]){
                    resList.push(element);
                }
            });
        }
        if(door.indexOf("쪽문") !== -1){
            south.forEach(element => {
                if(element[0] === menuIdx[i]){
                    resList.push(element);
                }
            });
        }
    }
    
    if(resList.length === 0){
        setInnerText('f_res', "조건에 맞는 음식점이 없습니다.");
        document.getElementById('f_info').innerHTML = "<button onclick=\"location.href = 'main.html'\">다시 선택하기</button>";
        return;
    }
    var f = randomItem(resList);
    setInnerText('f_res', f[1]);
    //setInnerText('f_menu', f[0]);
    setInnerText('f_add', f[2]);
    
}
function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}
function setInnerText(id, val) {
    const element = document.getElementById(id);
    element.innerText = val;
}

function search(){
    var restaurant = document.getElementById('f_res').innerText;
    var address = document.getElementById('f_add').innerText;
    location.href="https://search.naver.com/search.naver?query="+restaurant+" "+address;
}
getParmeter();
result();