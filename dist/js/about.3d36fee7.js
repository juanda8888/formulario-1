(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d36":function(t,e,r){"use strict";r.r(e);var a=r("7a23"),n=Object(a["g"])("h1",{class:"my-5"}," Registro de usuario ",-1),o={key:0,class:"alert alert-warning"};function s(t,e,r,s,i,c){return Object(a["p"])(),Object(a["d"])(a["a"],null,[n,null!==t.error.tipo?(Object(a["p"])(),Object(a["d"])("div",o,Object(a["w"])(t.error.mensaje),1)):Object(a["e"])("",!0),Object(a["g"])("form",{onSubmit:e[4]||(e[4]=Object(a["E"])((function(){return c.procesarFormulario&&c.procesarFormulario.apply(c,arguments)}),["prevent"]))},[Object(a["D"])(Object(a["g"])("input",{type:"email",placeholder:"email",class:"form-control my-2","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t})},null,512),[[a["A"],i.email,void 0,{trim:!0}]]),Object(a["D"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.pass1=t})},null,512),[[a["A"],i.pass1,void 0,{trim:!0}]]),Object(a["D"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.pass2=t})},null,512),[[a["A"],i.pass2,void 0,{trim:!0}]]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary",disabled:c.bloquear}," Registrar ",8,["disabled"])],32)],64)}var i=r("5530"),c=(r("caad"),r("2532"),r("5502")),u={data:function(){return{email:"",pass1:"",pass2:""}},computed:Object(i["a"])({bloquear:function(){return!this.email.includes("@")||!(this.pass1.length>5&&this.pass1===this.pass2)}},Object(c["d"])(["error"])),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["registrarUsuario"])),{},{procesarFormulario:function(){this.registrarUsuario({email:this.email,password:this.pass1}),this.email="",this.pass1="",this.pass2=""}})};u.render=s;e["default"]=u},"1a24":function(t,e,r){"use strict";r.r(e);var a=r("7a23");function n(t,e,r,n,o,s){var i=Object(a["u"])("Input");return Object(a["p"])(),Object(a["d"])("form",{onSubmit:e[1]||(e[1]=Object(a["E"])((function(e){return t.updateTarea(t.tarea)}),["prevent"]))},[Object(a["g"])(i,{tarea:t.tarea},null,8,["tarea"])],32)}var o=r("5530"),s=r("1270"),i=r("5502"),c={components:{Input:s["a"]},computed:Object(o["a"])({},Object(i["d"])(["tarea"])),methods:Object(o["a"])({},Object(i["b"])(["setTarea","updateTarea"])),created:function(){this.setTarea(this.$route.params.id)}};c.render=n;e["default"]=c},2532:function(t,e,r){"use strict";var a=r("23e7"),n=r("5a34"),o=r("1d80"),s=r("ab13");a({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(o(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var a=r("861d"),n=r("c6b6"),o=r("b622"),s=o("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},"5a34":function(t,e,r){var a=r("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},a55b:function(t,e,r){"use strict";r.r(e);var a=r("7a23"),n=Object(a["g"])("h1",{class:"my-5"}," Login de usuario ",-1),o={key:0,class:"alert alert-warning"};function s(t,e,r,s,i,c){return Object(a["p"])(),Object(a["d"])(a["a"],null,[n,null!==t.error.tipo?(Object(a["p"])(),Object(a["d"])("div",o,Object(a["w"])(t.error.mensaje),1)):Object(a["e"])("",!0),Object(a["g"])("form",{onSubmit:e[3]||(e[3]=Object(a["E"])((function(){return c.procesarFormulario&&c.procesarFormulario.apply(c,arguments)}),["prevent"]))},[Object(a["D"])(Object(a["g"])("input",{type:"email",placeholder:"email",class:"form-control my-2","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t})},null,512),[[a["A"],i.email,void 0,{trim:!0}]]),Object(a["D"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.pass1=t})},null,512),[[a["A"],i.pass1,void 0,{trim:!0}]]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary",disabled:c.bloquear}," Login ",8,["disabled"])],32)],64)}var i=r("5530"),c=(r("caad"),r("2532"),r("5502")),u={data:function(){return{email:"",pass1:""}},computed:Object(i["a"])({bloquear:function(){return!this.email.includes("@")||!(this.pass1.length>5)}},Object(c["d"])(["error"])),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["loginUsuario"])),{},{procesarFormulario:function(){this.loginUsuario({email:this.email,password:this.pass1}),this.email="",this.pass1=""}})};u.render=s;e["default"]=u},ab13:function(t,e,r){var a=r("b622"),n=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(a){}}return!1}},caad:function(t,e,r){"use strict";var a=r("23e7"),n=r("4d64").includes,o=r("44d2");a({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);
//# sourceMappingURL=about.3d36fee7.js.map