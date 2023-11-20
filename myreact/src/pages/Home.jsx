import React, { useState } from 'react';
/**
 * react에서 반복문을 통해 태그를 생성할때
 * 각각의 element들이 변경되었는지 또는 추가, 삭제 되었는지 확인하기 위해 key가 사용된다.
 * 그렇기 때문에 리스트 각각의 요소를 구별할 수 있도록 유니크 해야하고,
 * 변하지 않는 값을 key로 할당해주는 것이 중요하다.
 * 
 * 가장 좋은 방법은 리스트안에 있는 아이템들의 고유한 시퀀스를 key로 사용하는 것이다.
 * 하지만 리스트 안에 아이템들이 시퀀스를 가지고 있지 않다면 차선책으로
 * 리스트의 index를 key로 사용할 수 있다.
 * 
 * 주의사항
 * key는 전부 유니크할 필요는 없다. 형제노드끼리만 유니크하면 된다.
 */
const Home = (props) => {
    const { reply, onDelectReply } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={5}>댓글({reply.length})</th>
                    </tr>
                </thead>
                <tbody>
                    {reply.map((r)=> (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.writer}</td>
                            <td>{r.reply}</td>
                            <td>{r.reply_date}</td>
                            <td>
                                <button onClick={(ev) => {onDelectReply(r.id)} }>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;