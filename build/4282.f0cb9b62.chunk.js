"use strict";(self.webpackChunkcms_landing_page_i_3_gis=self.webpackChunkcms_landing_page_i_3_gis||[]).push([[4282],{74282:(Es,X,t)=>{t.r(X),t.d(X,{default:()=>ss});var e=t(74081),h=t(27279),R=t(93415),w=t(73411),A=t(10701),y=t(48102),q=t(5938),ee=t(15244),ve=t(77970),Ce=t(6918),B=t(32370),Pe=t(23298),se=t(74577),je=t(2878),Oe=t(35250),ye=t(27875),Ae=t(68412),Te=t(27997),te=t(73354),Le=t(37472),S=t(4987),Re=t(74758),Be=t(10989),Ie=t(84366),c=t(15530),Ue=t(364),P=t(61020),T=t(51447),We=t(47533),s=t(61843),ps=t(31855),ne=t(29206),Ke=t(78665),Fe=t(61287),Se=t(6162),b=t(36938),be=t(57121),Ze=t(76827),ze=t(35318),$e=t(86485),Qe=t(66351),Ve=t(26784),Z=t(19003),u=t(70627),He=t(71563),Ge=t(10124),ae=t(40464),hs=t(6078),Ms=t(47853),ms=t(50547),xs=t(74063);const Ne=(n,{pathname:i,query:l})=>{let r=[{id:null,label:{id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"},href:n?(0,s.a)(i,l):void 0}];return n?.parent?.parent&&r.push([]),n?.parent&&r.push({id:n.parent.id,label:n.parent.name,href:(0,s.a)(i,l,{folder:n.parent.id,folderPath:n.parent.path})}),n&&r.push({id:n.id,label:n.name}),r},ke=n=>{const{id:i}=(0,s.u)();return(0,e.jsx)(R.x,{position:"relative",zIndex:2,children:(0,e.jsx)(w.C,{"aria-labelledby":`${i}-title`,...n})})},z=({pagination:n})=>(0,e.jsx)(R.x,{paddingTop:6,children:(0,e.jsxs)(A.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(c.v4,{}),(0,e.jsx)(c.tU,{pagination:n})]})});z.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},z.propTypes={pagination:u.shape({page:u.number,pageCount:u.number,pageSize:u.number,total:u.number})};const ie=({selected:n,onSuccess:i})=>{const{formatMessage:l}=(0,P.Z)(),[r,d]=(0,h.useState)(!1),{isLoading:g,remove:_}=(0,s.b)(),E=async()=>{await _(n),i()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y.z,{variant:"danger-light",size:"S",startIcon:(0,e.jsx)(Ke.Z,{}),onClick:()=>d(!0),children:l({id:"global.delete",defaultMessage:"Delete"})}),(0,e.jsx)(c.QH,{isConfirmButtonLoading:g,isOpen:r,onToggleDialog:()=>d(!1),onConfirm:E})]})};ie.propTypes={selected:u.arrayOf(s.A,s.F).isRequired,onSuccess:u.func.isRequired};const Ye=()=>{const n=(0,c.lm)(),i=(0,ae.useQueryClient)(),{post:l}=(0,c.kY)(),r=({destinationFolderId:_,filesAndFolders:E})=>{const f=E.reduce((p,D)=>{const{id:o,type:j}=D,M=j==="asset"?"fileIds":"folderIds";return p[M]||(p[M]=[]),p[M].push(o),p},{});return l("/upload/actions/bulk-move",{...f,destinationFolderId:_})},d=(0,ae.useMutation)(r,{onSuccess(_){const{data:{data:E}}=_;E?.files?.length>0&&(i.refetchQueries([s.p,"assets"],{active:!0}),i.refetchQueries([s.p,"asset-count"],{active:!0})),i.refetchQueries([s.p,"folders"],{active:!0}),n({type:"success",message:{id:(0,s.g)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...d,move:(_,E)=>d.mutateAsync({destinationFolderId:_,filesAndFolders:E})}},$=({onClose:n,selected:i,currentFolder:l})=>{const{formatMessage:r}=(0,P.Z)(),{data:d,isLoading:g}=(0,s.c)(),{move:_}=Ye();if(!d)return null;const E=async(D,{setErrors:o})=>{try{await _(D.destination.value,i),n()}catch(j){const I=(0,c.OT)(j).errors.reduce((U,v)=>(U[v.values?.path?.length||"destination"]=v.defaultMessage,U),{});Ge(I)||o(I)}},f=()=>{n()};if(g)return(0,e.jsx)(q.P,{onClose:f,labelledBy:"title",children:(0,e.jsx)(ee.f,{children:(0,e.jsx)(A.k,{justifyContent:"center",paddingTop:4,paddingBottom:4,children:(0,e.jsx)(ve.a,{children:r({id:(0,s.g)("content.isLoading"),defaultMessage:"Content is loading."})})})})});const p={destination:{value:l?.id||"",label:l?.name||d[0].label}};return(0,e.jsx)(q.P,{onClose:f,labelledBy:"title",children:(0,e.jsx)(He.J9,{validateOnChange:!1,onSubmit:E,initialValues:p,children:({values:D,errors:o,setFieldValue:j})=>(0,e.jsxs)(c.l0,{noValidate:!0,children:[(0,e.jsx)(Ce.x,{children:(0,e.jsx)(B.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:r({id:(0,s.g)("modal.folder.move.title"),defaultMessage:"Move elements to"})})}),(0,e.jsx)(ee.f,{children:(0,e.jsx)(Pe.r,{gap:4,children:(0,e.jsx)(se.P,{xs:12,col:12,children:(0,e.jsxs)(A.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(je.Q,{htmlFor:"folder-destination",children:r({id:(0,s.g)("form.input.label.folder-location"),defaultMessage:"Location"})}),(0,e.jsx)(s.S,{options:d,onChange:M=>{j("destination",M)},defaultValue:D.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:o?.destination,ariaErrorMessage:"destination-error"}),o.destination&&(0,e.jsx)(B.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600",children:o.destination})]})})})}),(0,e.jsx)(Oe.m,{startActions:(0,e.jsx)(y.z,{onClick:f,variant:"tertiary",name:"cancel",children:r({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(y.z,{type:"submit",loading:g,children:r({id:"modal.folder.move.submit",defaultMessage:"Move"})})})]})})})};$.defaultProps={currentFolder:void 0},$.propTypes={onClose:u.func.isRequired,currentFolder:s.F,selected:u.arrayOf(s.F,s.A).isRequired};const Q=({selected:n,onSuccess:i,currentFolder:l})=>{const{formatMessage:r}=(0,P.Z)(),[d,g]=(0,h.useState)(!1),_=()=>{g(!1),i()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y.z,{variant:"secondary",size:"S",startIcon:(0,e.jsx)(Fe.Z,{}),onClick:()=>g(!0),children:r({id:"global.move",defaultMessage:"Move"})}),d&&(0,e.jsx)($,{currentFolder:l,onClose:_,selected:n})]})};Q.defaultProps={currentFolder:void 0},Q.propTypes={onSuccess:u.func.isRequired,currentFolder:s.F,selected:u.arrayOf(s.A,s.F).isRequired};const V=({selected:n,onSuccess:i,currentFolder:l})=>{const{formatMessage:r}=(0,P.Z)();return(0,e.jsxs)(A.k,{gap:2,paddingBottom:5,children:[(0,e.jsx)(B.Z,{variant:"epsilon",textColor:"neutral600",children:r({id:(0,s.g)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:n.filter(({type:d})=>d==="folder").length,numberAssets:n.filter(({type:d})=>d==="asset").length})}),(0,e.jsx)(ie,{selected:n,onSuccess:i}),(0,e.jsx)(Q,{currentFolder:l,selected:n,onSuccess:i})]})};V.defaultProps={currentFolder:void 0},V.propTypes={onSuccess:u.func.isRequired,currentFolder:s.F,selected:u.arrayOf(s.A,s.F).isRequired};const Je=({isFiltering:n,canCreate:i,canRead:l})=>n?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:l?i?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},oe=({canCreate:n,isFiltering:i,canRead:l,onActionClick:r})=>{const{formatMessage:d}=(0,P.Z)(),g=Je({isFiltering:i,canCreate:n,canRead:l});return(0,e.jsx)(s.E,{icon:l?null:Se.Z,action:n&&!i&&(0,e.jsx)(y.z,{variant:"secondary",startIcon:(0,e.jsx)(b.Z,{}),onClick:r,children:d({id:(0,s.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})}),content:d({...g,id:(0,s.g)(g.id)})})};oe.propTypes={canCreate:u.bool.isRequired,canRead:u.bool.isRequired,isFiltering:u.bool.isRequired,onActionClick:u.func.isRequired};const Xe=()=>{const n=(0,h.useRef)(null),[i,l]=(0,h.useState)(!1),{formatMessage:r}=(0,P.Z)(),{trackUsage:d}=(0,c.rS)(),[{query:g},_]=(0,c.Kx)(),E=g?.filters?.$and||[],f=()=>l(o=>!o),p=o=>{_({filters:{$and:o},page:1})},D=o=>{d("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(o[o.length-1])[0]}),_({filters:{$and:o},page:1})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y.z,{variant:"tertiary",ref:n,startIcon:(0,e.jsx)(be.Z,{}),onClick:f,size:"S",children:r({id:"app.utils.filters",defaultMessage:"Filters"})}),i&&(0,e.jsx)(s.d,{displayedFilters:s.e,filters:E,onSubmit:D,onToggle:f,source:n}),(0,e.jsx)(s.f,{appliedFilters:E,filtersSchema:s.e,onRemoveFilter:p})]})},H=({breadcrumbs:n,canCreate:i,folder:l,onToggleEditFolderDialog:r,onToggleUploadAssetDialog:d})=>{const{formatMessage:g}=(0,P.Z)(),{pathname:_}=(0,T.TH)(),[{query:E}]=(0,c.Kx)(),f={...E,folder:l?.parent?.id??void 0,folderPath:l?.parent?.path??void 0};return(0,e.jsx)(ye.T,{title:g({id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"}),subtitle:n&&l&&(0,e.jsx)(s.h,{as:"nav",label:g({id:(0,s.g)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:n,currentFolderId:l?.id}),navigationAction:l&&(0,e.jsx)(Ae.r,{startIcon:(0,e.jsx)(Ze.Z,{}),to:`${_}?${(0,ne.stringify)(f,{encode:!1})}`,children:g({id:(0,s.g)("header.actions.folder-level-up"),defaultMessage:"Back"})}),primaryAction:i&&(0,e.jsxs)(A.k,{gap:2,children:[(0,e.jsx)(y.z,{startIcon:(0,e.jsx)(b.Z,{}),variant:"secondary",onClick:r,children:g({id:(0,s.g)("header.actions.add-folder"),defaultMessage:"Add new folder"})}),(0,e.jsx)(y.z,{startIcon:(0,e.jsx)(b.Z,{}),onClick:d,children:g({id:(0,s.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})})]})})};H.defaultProps={breadcrumbs:!1,folder:null},H.propTypes={breadcrumbs:u.oneOfType([s.B,u.bool]),canCreate:u.bool.isRequired,folder:s.F,onToggleEditFolderDialog:u.func.isRequired,onToggleUploadAssetDialog:u.func.isRequired};const we=(0,Z.default)(R.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,le=(0,Z.default)(B.Z)`
  max-width: 100%;
`,re=(0,Z.default)(R.x)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }
`,qe=()=>{const{push:n}=(0,T.k6)(),{canRead:i,canCreate:l,canUpdate:r,canCopyLink:d,canDownload:g,isLoading:_}=(0,s.i)(),E=(0,h.useRef)(),{formatMessage:f}=(0,P.Z)(),{pathname:p}=(0,T.TH)(),{trackUsage:D}=(0,c.rS)(),[{query:o},j]=(0,c.Kx)(),M=Boolean(o._q||o.filters),[I,U]=(0,c.Yw)(s.l.view,s.v.GRID),v=I===s.v.GRID,{data:C,isLoading:ts,errors:ns}=(0,s.j)({skipWhen:!i,query:o}),{data:as,isLoading:is,errors:os}=(0,s.k)({enabled:i&&C?.pagination?.page===1&&!(0,s.m)(o),query:o}),{data:G,isLoading:de,error:ls}=(0,s.n)(o?.folder,{enabled:i&&!!o?.folder});ls?.response?.status===404&&n(p);const W=as?.map(a=>({...a,type:"folder",folderURL:(0,s.a)(p,o,a.id),isSelectable:r}))??[],m=W?.length||0,K=C?.results?.map(a=>({...a,type:"asset",isSelectable:r}))||[],x=K?.length??0,rs=C?.pagination?.total,ce=de||is||_||ts,[ds,cs]=(0,h.useState)(!1),[gs,ge]=(0,h.useState)(!1),[ue,N]=(0,h.useState)(void 0),[k,_e]=(0,h.useState)(void 0),[O,{selectOne:F,selectAll:fe}]=(0,c.Uq)(["type","id"],[]),Ee=O?.length>0&&O?.length!==x+m,Y=()=>cs(a=>!a),pe=({created:a=!1}={})=>{a&&o?.page!=="1"&&j({...o,page:1}),ge(L=>!L)},he=(a,L)=>{a.target.checked&&D("didSelectAllMediaLibraryElements"),fe(L)},Me=a=>{D("didSortMediaLibraryElements",{location:"upload",sort:a}),j({sort:a})},me=a=>{_e(a),ge(!0)},us=a=>{_e(null),pe(a),E.current&&E.current.focus()},xe=a=>{a===x&&C.pagination.page===C.pagination.pageCount&&C.pagination.page>1&&j({...o,page:C.pagination.page-1})},_s=()=>{fe(),xe(O.length)};return(0,c.go)(),(0,e.jsxs)(Te.A,{children:[(0,e.jsxs)(te.o,{"aria-busy":ce,children:[(0,e.jsx)(H,{breadcrumbs:!de&&Ne(G,{pathname:p,query:o}),canCreate:l,onToggleEditFolderDialog:pe,onToggleUploadAssetDialog:Y,folder:G}),(0,e.jsx)(Le.Z,{startActions:(0,e.jsxs)(e.Fragment,{children:[r&&v&&(x>0||m>0)&&(0,e.jsx)(we,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200",children:(0,e.jsx)(w.C,{"aria-label":f({id:(0,s.g)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Ee,value:(x>0||m>0)&&O.length===x+m,onChange:a=>he(a,[...K,...W])})}),i&&v&&(0,e.jsx)(s.o,{value:o?.sort,onChangeSort:Me}),i&&(0,e.jsx)(Xe,{})]}),endActions:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.jW,{permissions:s.P.configureView,children:(0,e.jsx)(re,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)(S.h,{forwardedAs:We.rU,to:{pathname:`${p}/configuration`,search:(0,ne.stringify)(o,{encode:!1})},icon:(0,e.jsx)(ze.Z,{}),label:f({id:"app.links.configure-view",defaultMessage:"Configure the view"})})})}),(0,e.jsx)(re,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)(S.h,{icon:v?(0,e.jsx)($e.Z,{}):(0,e.jsx)(Qe.Z,{}),label:f(v?{id:(0,s.g)("view-switch.list"),defaultMessage:"List View"}:{id:(0,s.g)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>U(v?s.v.LIST:s.v.GRID)})}),(0,e.jsx)(c.m,{label:f({id:(0,s.g)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})]})}),(0,e.jsxs)(Re.D,{children:[O.length>0&&(0,e.jsx)(V,{currentFolder:G,selected:O,onSuccess:_s}),ce&&(0,e.jsx)(c.dO,{}),(ns||os)&&(0,e.jsx)(c.Hn,{}),m===0&&x===0&&(0,e.jsx)(oe,{canCreate:l,canRead:i,isFiltering:M,onActionClick:Y}),i&&!v&&(x>0||m>0)&&(0,e.jsx)(s.T,{assetCount:x,folderCount:m,indeterminate:Ee,onChangeSort:Me,onChangeFolder:(a,L)=>n((0,s.a)(p,o,{folder:a,folderPath:L})),onEditAsset:N,onEditFolder:me,onSelectOne:F,onSelectAll:he,rows:[...W,...K],selected:O,shouldDisableBulkSelect:!r,sortQuery:o?.sort??""}),i&&v&&(0,e.jsxs)(e.Fragment,{children:[m>0&&(0,e.jsx)(s.q,{title:(M&&x>0||!M)&&f({id:(0,s.g)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:m})||"",children:W.map(a=>{const fs=!!O.filter(({type:J})=>J==="folder").find(J=>J.id===a.id),De=(0,s.a)(p,o,{folder:a?.id,folderPath:a?.path});return(0,e.jsx)(se.P,{col:3,children:(0,e.jsx)(s.r,{ref:k&&a.id===k.id?E:void 0,ariaLabel:a.name,id:`folder-${a.id}`,to:De,startAction:F&&a.isSelectable?(0,e.jsx)(ke,{"data-testid":`folder-checkbox-${a.id}`,value:fs,onChange:()=>F(a)}):null,cardActions:(0,e.jsx)(S.h,{icon:(0,e.jsx)(Ve.Z,{}),"aria-label":f({id:(0,s.g)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>me(a)}),children:(0,e.jsx)(s.s,{children:(0,e.jsx)(s.t,{to:De,children:(0,e.jsxs)(A.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%",children:[(0,e.jsxs)(le,{fontWeight:"semiBold",ellipsis:!0,children:[a.name,(0,e.jsx)(Be.T,{children:":"})]}),(0,e.jsx)(le,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0,children:f({id:(0,s.g)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:a.children.count,filesCount:a.files.count})})]})})})})},`folder-${a.id}`)})}),x>0&&m>0&&(0,e.jsx)(R.x,{paddingTop:6,paddingBottom:4,children:(0,e.jsx)(Ie.i,{})}),x>0&&(0,e.jsx)(s.w,{assets:K,onEditAsset:N,onSelectAsset:F,selectedAssets:O.filter(({type:a})=>a==="asset"),title:(!M||M&&m>0)&&C?.pagination?.page===1&&f({id:(0,s.g)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:rs})||""})]}),C?.pagination&&(0,e.jsx)(z,{pagination:C.pagination})]})]}),ds&&(0,e.jsx)(s.U,{onClose:Y,trackedLocation:"upload",folderId:o?.folder}),gs&&(0,e.jsx)(s.x,{onClose:us,folder:k,parentFolderId:o?.folder,location:"upload"}),ue&&(0,e.jsx)(s.y,{onClose:a=>{a===null&&xe(1),N(void 0)},asset:ue,canUpdate:r,canCopyLink:d,canDownload:g,trackedLocation:"upload"})]})},es=(0,h.lazy)(()=>t.e(4649).then(t.bind(t,64649))),ss=()=>{const{config:{isLoading:n,isError:i,data:l}}=(0,s.z)(),[{rawQuery:r},d]=(0,c.Kx)(),{formatMessage:g}=(0,P.Z)(),_=g({id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"});return(0,h.useEffect)(()=>{n||i||r||d({sort:l.sort,page:1,pageSize:l.pageSize})},[n,i,l,r,d]),(0,c.go)(),(0,e.jsxs)(te.o,{"aria-busy":n,children:[(0,e.jsx)(Ue.q,{title:_}),n&&(0,e.jsx)(c.dO,{}),r?(0,e.jsx)(h.Suspense,{fallback:(0,e.jsx)(c.dO,{}),children:(0,e.jsxs)(T.rs,{children:[(0,e.jsx)(T.AW,{exact:!0,path:`/plugins/${s.p}`,component:qe}),(0,e.jsx)(T.AW,{exact:!0,path:`/plugins/${s.p}/configuration`,render:()=>(0,e.jsx)(es,{config:l})})]})}):null]})}}}]);
