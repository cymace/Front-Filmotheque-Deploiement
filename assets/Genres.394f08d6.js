import{r as u,o as _,a as s,c as a,b as e,w as b,v as p,F as m,d as f,t as d}from"./index.88e399d2.js";const v=e("h1",null,"Gestion des genres",-1),g={class:"form-element"},h=e("label",{for:"libelle"},"Libelle : ",-1),x=e("h2",null,"Liste des genres",-1),w={__name:"Genres",setup(y){const l=u(""),o=u([]);_(()=>{i()});async function c(){const t={libelle:l.value};await axios.post("genres",t),i(),l.value=""}async function i(){const t=await axios.get("genres");o.value=t.data}return(t,r)=>(s(),a("main",null,[v,e("form",null,[e("section",g,[h,b(e("input",{id:"libelle",type:"text","onUpdate:modelValue":r[0]||(r[0]=n=>l.value=n)},null,512),[[p,l.value]])]),e("button",{type:"button",onClick:c},"Validation")]),x,e("ul",null,[(s(!0),a(m,null,f(o.value,n=>(s(),a("li",null," id: "+d(n.id)+", libelle : "+d(n.libelle),1))),256))])]))}};export{w as default};
