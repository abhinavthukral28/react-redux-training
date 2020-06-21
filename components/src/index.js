import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 5:00 pm"
          content="This is a blog"
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 6:00 pm"
          content="This is Content"
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jack"
          timeAgo="Today at 7:00 pm"
          content="This is Awesome"
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
