import{d as o,aA as t}from"./page_layout.js?v=1741416570306";const{t:a}=o.global;function c(o){var c,n;const s=t();let e="--";switch(o.db_type){case 0:e=a("Database.tools.index_67");break;case 1:e="".concat(a("Database.tools.index_68")," (").concat((null==(c=o.conn_config)?void 0:c.db_host)||"",":").concat((null==(n=o.conn_config)?void 0:n.db_port)||"",")");break;case 2:for(let t=0;t<s.remoteList.length;t++){const c=s.remoteList[t];if(c.id===o.sid){e=""!==c.ps?c.ps:"".concat(a("Database.tools.index_68")," (").concat(c.db_host,":").concat(c.db_port,")");break}}}return e}export{c as g};
