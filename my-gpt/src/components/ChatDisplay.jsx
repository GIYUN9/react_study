import React from 'react';
import styled from 'styled-components';
import {Avatar, Card, Space} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ChatDisplay = ({chatDataList, isLoading}) => {
    return (
        <div>
            <ChatConteiner>
                {chatDataList.map((chat, index) => (
                    <div key={index}>
                        <Space align="start">
                            <Avatar size={40}>USER</Avatar>
                            <Card
                                style={{
                                width: 300,
                                }}
                                bodyStyle={{
                                    padding: "12px"
                                }}
                            >
                                {chat.question}
                            </Card>
                        </Space>
                        <RequestArea>
                            <Space align="start">
                                <Card
                                        style={{
                                        width: 400,
                                        }}
                                        bodyStyle={{
                                            padding: "12px"
                                        }}
                                    >
                                        {chat.message}
                                </Card>
                                <Avatar size={40} src="data:image/jpeg;base64,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"></Avatar>
                            </Space>
                        </RequestArea>
                    </div>
                ))}
                { isLoading &&
                    <div>
                        AI 응답 작성중...
                        <LoadingOutlined />
                    </div>
                }
            </ChatConteiner>
        </div>
    );
};

export default ChatDisplay;


const RequestArea = styled.div`
    float: right;
    text-align: right;
`

const ChatConteiner = styled.div`
    display: flex;
    flex-direction: column;
`