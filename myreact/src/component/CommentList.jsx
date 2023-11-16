import React from 'react';
import Comment from './Comment';

const result = [
    {
        name: "최지원",
        comment: "안녕하세요 최지원입니다."
    },{
        name: "유재석",
        comment: "2등."
    },{
        name: "강호동",
        comment: "탈퇴하겠습니다."
    },{
        name: "임도훈",
        comment: "질문있습니다."
    },{
        name: "최지원",
        comment: "마지막 댓글입니다."
    }
]

/*
    map함수
    배열의 모든 요소를 탐색하며 리턴된 값으로 새로운 배열을 만들어주는 메서드
*/

// const tmp = [1,2,3,4,5,6,7,8,9,10]
// tmp.map(function name(num) {
//     return num * 10;
// })

const CommentList = () => {
    return (
        <div>
            {result.map((c) => {
                return (
                    <Comment name={c.name} comment={c.comment}/>
                );
            })}
        </div>
    );
};

export default CommentList;