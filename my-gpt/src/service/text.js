$.ajax({
    url: "~~!~!~",
    method: "get",
    dataType: "json",
    success: function(){
        console.log('성공했습니다.');
    },
    error: function(){

    }
})


function ajax(requestJson){
    let xhr = new XMLHttpRequest();

    // 각 설정값에 대한 디폴트값 예외처리
    requestJson.method = requestJson.method ? requestJson.method : "GET";

    //요청
    xhr.open(requestJson.method, requestJson.url, true);


    //응답
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let response = JSON.parse(xhr.responseText);
                requestJson.success(response);
            } else{
                requestJson.error(xhr.status);
            }
        }
    }
}

const getPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("완료")
    }, 2000)
})

getPromise().then((res) => {
    console.log(res);
})

//callback
const callbackFunk = (callback) => {
    setTimeout(() => {
        callback("완료")
    }, 2000)
}

//async
async function test(){
    try{
        const res = await getPromise();
        console.log(res);
    } catch(e) {
        console.log(e);
    }
}