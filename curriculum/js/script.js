"use strict";//严格模式

const divDom = window.zqy.GetEleId("table-data-wrap");
const tableDom = window.zqy.CratEle("table");
const styles = {
    'width':'100%',
    'border':'0',
    'cellpadding':'0',
    'cellspacing':'0',
    'id':'table-data-wrap'
}
window.zqy.SetAttr(tableDom,styles);

let tHeadHtml = `<thead><tr>`;

//forEach
tableTheadData.forEach((item,index,arr)=>{
    //判断是否有width 和 id
    let width = item.width? ` width = "${item.width}"` : ""
    let id = item.id? ` id = "${item.id}"` : ""
    tHeadHtml += 
    `<th${width}${id}>${item.label}</th>`;
})
tHeadHtml += `</tr></thead>`;
console.log(tHeadHtml);
// tableDom.innerHTML = `<thead>
//                         <tr>
//                             <th>头像</th>
//                             <th>姓名</th>
//                             <th>性别</th>
//                             <th>年龄</th>
//                             <th>手机号</th>
//                             <th>国籍</th>
//                             <th width="200">爱好</th>
//                             <th>头衔</th>
//                             <th>操作</th>
//                         </tr>
//                     </thead>`;
function createTbodyData(){
 
}//主体数据
function createFace(data){
    let html = ` <td>
                <div class="face">
                    <span class="gender icon-${data.face.gender}"></span>
                    <img src="${data.face.img}" alt="">
                </div>
            </td>`;
    return html;
}//生成头像
function createName(data){
    let html = `<td>
                    <div class="people-name">
                        <h4 class="name">${data.name.trueName}</h4>
                        <span class="nickname option-05 fs-12">昵称:${data.name.nickname}</span>
                    </div>
                </td>`;
    return html;
}//生成名字
function createGender(data){
    let html = `<td>
                    <div class="gender-wrap">
                        <span class="gender icon-girl ${data.face.gender == 'girl' ? '' : 'option-05'}"></span>
                        <span class="gender icon-boy ${data.face.gender == 'boy' ? '' : 'option-05'}"></span>
                    </div>
                </td>`;
    return html;
}//生成性别
let trHtml = ``;
let tBodyHtml = `<tbody>`;
for(let i = 0;i < tableTBodyData.length;i++){
    const data = tableTBodyData[i];
    console.log(data)
    trHtml += `<tr>`;
    //头像
    trHtml += createFace(data);
    // trHtml += ` <td>
    //                 <div class="face">
    //                     <span class="gender icon-${data.face.gender}"></span>
    //                     <img src="${data.face.img}" alt="">
    //                 </div>
    //             </td>`;

    //姓名
    trHtml += createName(data);
    //性别
    trHtml += createGender(data);
    //年龄
    trHtml += `<td>
                    <div class="age text-center">
                        <p>${data.age.number}</p>
                        <span class="option-05 fs-12">（单身狗）</span>
                    </div>
                </td>`;
    //手机号
    trHtml += ` <td>
                    <div class="phone">
                        ${data.phone.code}<span class="option-05">（中国）</span><br />
                        ${data.phone.number}
                    </div>
                </td>`;
    //国籍
    trHtml += `<td>
                    <div>
                        <img src="${data.country.National_flag}" alt="${data.country.name}">
                        <p class="country-name" style="color: red;">${data.country.name}</p>
                    </div>
                </td>`;
    //爱好
    let likehtml = ``;
    data.like.forEach(item => {
        likehtml += ` <span style="background-color: ${item.color};">${item.tag}</span>`
    })
    trHtml += `<td>
                    <div class="likes">
                        ${likehtml}
                    </div>
                </td>`;
    //头衔
    trhtml += `<td>
                    <div class="grade">
                        <span class="role-name">${data.rank.name}</span>
                        <div class="grade-wrap icon-grade">
                            <div class="grade-high icon-grade" style="width: ${data.rank.level * 16};"></div>
                        </div>
                    </div>
                </td>`;
    //操作
    trHtml += ` <td>
                    <div class="operation">
                        <a href="javascript: void(0);" class="operation-btn">设置</a>
                        <ul class="links">
                            <a href="javascript: void(0);">编辑</a>
                            <a href="javascript: void(0);">删除</a>
                            <a href="javascript: void(0);">锁定</a>
                            <a href="javascript: void(0);">收起</a>
                        </ul>
                    </div>
                </td>`;
    trHtml += `</tr>`;
}
console.log(tableTBodyData);
//生成TABLE内容
tBodyHtml += `${trHtml}</tbody>`;
//生成页面
tableDom.innerHTML = tHeadHtml + tBodyHtml;
divDom.appendChild(tableDom);
