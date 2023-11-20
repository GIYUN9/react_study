import React from 'react';

const CreateReply = (props) => {
    const {onInputChange, newReply, onAddReply} = props;

    return (
        <div>
            <h3>댓글 작성하기</h3>
            <form>
                <div>
                    <input 
                      type="text"
                      name='id'
                      value={newReply.id}
                      onChange={onInputChange}
                      placeholder='아이디를 입력하세요.' 
                     />
                </div>
                <div>
                    <input 
                      type="text"
                      name='writer'
                      value={newReply.writer}
                      onChange={onInputChange}
                      placeholder='작성자를 입력하세요.' 
                     />
                </div>
                <div>
                    <input 
                      type="text"
                      name='reply'
                      value={newReply.reply}
                      onChange={onInputChange}
                      placeholder='댓글을 입력하세요.' 
                     />
                </div>
                <div>
                    <label>작성일 : </label>
                    <input 
                      type="date"
                      value={newReply.reply_date}
                      onChange={onInputChange}
                      name='reply_date' 
                     />
                </div>
            </form>
            <button onClick={onAddReply}>댓글 추가하기</button>
        </div>
    );
};

export default CreateReply;