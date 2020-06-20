import React from "react";
import CmtItem from './CmtItem'


export default class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentList: [
                { id: 1, user: "张三1", content: "哈哈哈" },
                { id: 2, user: "张三2", content: "哈哈哈" },
                { id: 3, user: "张三3", content: "哈哈哈" },
                { id: 4, user: "张三4", content: "哈哈哈" },
                { id: 5, user: "张三5", content: "哈哈哈" },
            ],
        };
    }

    render() {
        return <div>
            {this.state.CommentList.map((item) => (
            <div key={item.id}>
                <h1>评论人:{item.user}</h1>
                <p>评论内容:{item.content}</p>
            </div>
        ))}</div>;
    }
}