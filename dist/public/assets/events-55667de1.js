import{c as g,a as A,i as l,b as n,F as H,d as N,t as v}from"./index-d927c143.js";import{H as j,F as x,I as o,f as D,a as G,c as M,T as P,P as q}from"./common-0a03cb52.js";import{B as u}from"./Button-23785f8b.js";const R=v('<div class="flex gap-4"><label class="bg-gray-700 hover:bg-gray-900 text-sm text-white font-bold py-1 px-4 rounded"><input type="file" class="hidden" accept=".json">Import'),z=v('<div><main class="container mx-auto px-3 py-10"><h1 class="text-2xl mb-10">Events generator</h1><div class="flex gap-6 "><div class="flex-grow w-1/2"></div><div class="flex-grow-0 w-1/2">'),K=v('<div class="flex gap-5"><div class="flex-grow"><h2 class="text-xl text-bold"></h2><h2 class="mt-5 text-lg">Coordinates</h2></div><div class="flex-grow"><h2 class="text-lg">Check in</h2><h3 class="mt-5 text-lg">Nearby</h3><h3 class="mt-5 text-lg">Event'),W=()=>{const[S,k]=g("Copy"),[I,w]=g(!1),[T,y]=g(!1),$={id:"",name:"",event_name:"",event_campaign_id:"",start_date_time:"",end_date_time:"",coordinates:{latitude:"",longitude:""},checkin_default_button_text:"",checkin_notification_pause_period_hours:"",checkin_nearby_geofence_radius_meters:"",checkin_nearby_notification_text:"",checkin_nearby_button_text:"",checkin_event_geofence_radius_meters:"",checkin_event_notification_text:"",checkin_event_button_text:""},[a,i]=g({event_locations:[{...$}]},{equals:!1});A(()=>{document.getElementById("pre").innerHTML=JSON.stringify(a(),null,2)});function J(){a().event_locations.push({...$}),i({...a()})}function O(s){a().event_locations.splice(s(),1),i({...a()})}return(()=>{const s=z(),h=s.firstChild,B=h.firstChild,F=B.nextSibling,p=F.firstChild,C=p.nextSibling;return l(s,n(j,{}),h),l(p,n(H,{get each(){return a().event_locations},children:(e,d)=>n(x,{legend:"Event",className:"mb-5",get children(){const m=K(),r=m.firstChild,E=r.firstChild,_=E.nextSibling,c=r.nextSibling,L=c.firstChild,f=L.nextSibling,b=f.nextSibling;return l(E,()=>a().event_locations[d()]?.name||"Event name"),l(r,n(o,{label:"ID",get value(){return e.id},onInput:t=>{e.id=t,i({...a()})}}),_),l(r,n(o,{label:"Name",get value(){return e.name},onInput:t=>{e.name=t,i({...a()})}}),_),l(r,n(o,{label:"Event name",get value(){return e.event_name},onInput:t=>{e.event_name=t,i({...a()})}}),_),l(r,n(o,{label:"Event campaign id",get value(){return e.event_campaign_id},onInput:t=>{e.event_campaign_id=t,i({...a()})}}),_),l(r,n(o,{label:"Start datetime",get value(){return e.start_date_time},onInput:t=>{e.start_date_time=t,i({...a()})}}),_),l(r,n(o,{label:"End datetime",get value(){return e.end_date_time},onInput:t=>{e.end_date_time=t,i({...a()})}}),_),l(r,n(o,{label:"Latitude",get value(){return e.coordinates.latitude},onInput:t=>{e.coordinates.latitude=t,i({...a()})}}),null),l(r,n(o,{label:"Longitude",get value(){return e.coordinates.longitude},onInput:t=>{e.coordinates.longitude=t,i({...a()})}}),null),l(c,n(o,{label:"Default button text",get value(){return e.checkin_default_button_text},onInput:t=>{e.checkin_default_button_text=t,i({...a()})}}),f),l(c,n(o,{label:"Notification pause period hours",get value(){return e.checkin_notification_pause_period_hours},onInput:t=>{e.checkin_notification_pause_period_hours=t,i({...a()})}}),f),l(c,n(o,{label:"Geofence radius meters",get value(){return e.checkin_nearby_geofence_radius_meters},onInput:t=>{e.checkin_nearby_geofence_radius_meters=t,i({...a()})}}),b),l(c,n(o,{label:"Notification title",get value(){return e.checkin_nearby_notification_text},onInput:t=>{e.checkin_nearby_notification_text=t,i({...a()})}}),b),l(c,n(o,{label:"Button text",get value(){return e.checkin_nearby_button_text},onInput:t=>{e.checkin_nearby_button_text=t,i({...a()})}}),b),l(c,n(o,{label:"Geofence radius meters",get value(){return e.checkin_event_geofence_radius_meters},onInput:t=>{e.checkin_event_geofence_radius_meters=t,i({...a()})}}),null),l(c,n(o,{label:"Notification text",get value(){return e.checkin_event_notification_text},onInput:t=>{e.checkin_event_notification_text=t,i({...a()})}}),null),l(c,n(o,{label:"Button text",get value(){return e.checkin_event_button_text},onInput:t=>{e.checkin_event_button_text=t,i({...a()})}}),null),l(c,n(u,{onClick:()=>O(d),className:"mt-4",children:"Remove"}),null),m}})}),null),l(p,n(u,{className:"mt-5",onClick:J,children:"Add Event"}),null),l(C,n(x,{legend:"Actions",className:"flex flex-col gap-4",get children(){return[(()=>{const e=R();return e.firstChild.firstChild.addEventListener("change",r=>{D(r,i)}),l(e,n(u,{onClick:()=>{G("event_locations.json",JSON.stringify(a(),null,2))},children:"Export"}),null),l(e,n(u,{onClick:()=>w(!I()),children:"Insert"}),null),l(e,n(u,{onClick:()=>{k("Copied!"),M(JSON.stringify(a())),setTimeout(()=>{k("Copy")},2e3)},children:S}),null),e})(),N(()=>N(()=>!!I())()&&n(P,{value:"",onInput:e=>{try{y(!1),i(JSON.parse(e))}catch{y(!0)}},get className(){return T()?"bg-red-100":""}}))]}}),null),l(C,n(x,{legend:"JSON",className:"bg-gray-100",get children(){return n(q,{id:"pre",get children(){return JSON.stringify({})}})}}),null),s})()};export{W as default};
