var flag=false;
var flag1=false;
var email=document.getElementById('email');
var pass=document.getElementById('pass');
var firstName=document.getElementById('firstName');
var lastName=document.getElementById('lastName');
var check1=document.getElementById('checkbox1');
var check2=document.getElementById('checkbox2');
var btn=document.getElementById('button');
var item1=document.getElementById('item1');
var item2=document.getElementById('item2');
var item3=document.getElementById('item3');
var item4=document.getElementById('item4');
var checkbox1=document.getElementById('checkbox1');
var checkbox2=document.getElementById('checkbox2');
console.log(firstName);
// console.log(btn);
// 邮箱的正则
var pattern1=/^[1-9][0-9]{8,10}$/;
//密码的正则
var pattern2=/^\w{8,25}$/;
//姓的正则
var pattern3 = /^\w{6,12}$/;
//名的正则
var pattern4 = /^\w{6,12}$/;

email.addEventListener('focus',focus,false);
pass.addEventListener('focus',focus,false);
firstName.addEventListener('focus',focus,false);
lastName.addEventListener('focus',focus,false);

email.addEventListener('blur',check);
pass.addEventListener('blur',check);
firstName.addEventListener('blur',check);
lastName.addEventListener('blur',check);
checkbox1.addEventListener('change',check);
checkbox2.addEventListener('change',check);


 

//聚焦时
function focus(){
	this.style.outline='1px solid #abcdef';
	switch(this){
		case email:
		item1.innerHTML='请输入您的邮箱账号';
		item1.style.color='#f00';
		break;
		case pass:
		item2.innerHTML='密码由8-25位数字、字母、下划线组成';
		item2.style.color='#f00';
		break;
		case firstName:
		item3.innerHTML='请输入您的姓,由6-12位数字、字母、下划线组成';
		item3.style.color='#f00';
		break;
		case lastName:
		item4.innerHTML='请输入您的名字,由6-12位数字、字母、下划线组成';
		item4.style.color='#f00';
		break;
	}
}
// 失焦时
function check(){
	var res1=pattern1.test(email.value);
	var res2=pattern2.test(pass.value);
	var res3=pattern3.test(firstName.value);
	var res4=pattern4.test(lastName.value);


	switch(this){
		case email:
		if(email.value==''){
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item1.innerHTML='邮箱不能为空！';
			item1.style.color='rgba(255,0,0,0.8)';
		}else if(res1){
			this.style.outline = '1px solid rgba(0,255,0,0.8)';
			item1.innerHTML='邮箱输入正确！'
			item1.style.color='rgba(0,255,0,0.8)';
		}else{
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item1.innerHTML = '该邮箱不存在！';
			item1.style.color = 'rgba(255,0,0,0.8)';
		}

		case pass:
		if(pass.value==''){
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item2.innerHTML='密码不能为空！';
			item2.style.color='rgba(255,0,0,0.8)';
		}else if(res2){
			item2.style.color='rgba(0,255,0,0.8)';
			item2.innerHTML = '密码输入正确！';
			item2.style.color = 'rgba(0,255,0,0.8)';
		}else{ 
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item2.innerHTML = '密码不合法！';
			item2.style.color = 'rgba(255,0,0,0.8)';

		}
		break;
		case firstName:
		if(firstName.value == ''){ 
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item3.innerHTML = '姓不能为空！';
			item3.style.color = 'rgba(255,0,0,0.8)';

		}else if(res3){ 
			this.style.outline = '1px solid rgba(0,255,0,0.8)';
			item3.innerHTML = '姓输入正确！';
			item3.style.color = 'rgba(0,255,0,0.8)';

			
		}else{ 
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item3.innerHTML = '该姓氏不存在！';
			item3.style.color = 'rgba(255,0,0,0.8)';

		}
		break;
		 case lastName:
		if(lastName.value == ''){ 
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item4.innerHTML = '名不能为空！';
			item4.style.color = 'rgba(255,0,0,0.8)';

		}else if(res4){ 
			this.style.outline = '1px solid rgba(0,255,0,0.8)';
			item4.innerHTML = '名输入正确！';
			item4.style.color = 'rgba(0,255,0,0.8)';

			
		}else{ 
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			item4.innerHTML = '该名格式不正确！';
			item4.style.color = 'rgba(255,0,0,0.8)';
		}
		break;
		case checkbox1:
		if(checkbox1.checked==true){
			flag=true;
		}else{
			flag=false;
		}
		break;
		case checkbox2:
		if(checkbox2.checked==true){
			flag1=true;
		}else{
			flag1=false;
		}
		break;
	}
	
	if(res1 && res2 && res3 && res4 &&  flag && flag1){
					btn.removeAttribute('disabled');
	}else{ 
					btn.setAttribute('disabled','disabled');
					console.log(checkbox1.checked)
	}
	// console.log(flag)
	var form=document.getElementById('resign');
//设置提交事件
form.onsubmit=function(){
	alert('注册成功！');

	return false;
}		
}



