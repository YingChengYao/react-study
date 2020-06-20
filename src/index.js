import React from "react";
import ReactDom from "react-dom";

import CmtList from './components/CmtList'

ReactDom.render(
  <div>
   <CmtList></CmtList>
  </div>,
  document.getElementById("app")
);
module:{
  rules:[
    {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
  ]
}
