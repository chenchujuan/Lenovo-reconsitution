var flag=false;
var user=document.getElementById('user');
var pass=document.getElementById('pass');
var sub=document.getElementById('sub');
var item1=document.getElementsByClassName('item1')[0];
var item2=document.getElementsByClassName('item2')[0];
console.log(item1);
//用户名正则
var pattern1=/^\w{6,12}$/;

//密码正则
var pattern2= /^\w{8,25}$/;

user.addEventListener('focus',focus,false);
pass.addEventListener('focus',focus,false);

user.addEventListener('blur',check);
pass.addEventListener('blur',check);

//聚焦时
function focus(){
	this.style.outline='1px solid #00f';
	switch(this){
		case user:
		// console.log('a');
		item1.innerHTML='请输入用户名';
		break;
		case pass:
		item2.innerHTML='请输入密码';
		break;

	}
}
function check(){
	var res1=pattern1.test(user.value);
	var res2=pattern2.test(pass.value);
	switch(this){
		case user:
		if(user.value==''){
		this.style.outline='1px solid rgba(255,0,0,0.8)';
		item1.innerHTML='用户名不能为空！';}
		else if(res1){
		this.style.outline='1px solid rgba(0,255,0,0.8)';
		item1.innerHTML='用户名正确';
		item1.style.color='rgba(0,255,0,0.8)';
		}else{
			this.style.outline='1px solid rgba(255,0,0,0.8)';
			item1.innerHTML='用户名不存在';

		}

		case pass:
		if(pass.value==''){
		this.style.outline='1px solid rgba(255,0,0,0.8)';
		item2.innerHTML='密码不能为空！';

		}else if(res2){
			this.style.outline='1px solid rgba(0,255,0,0.8)';
			item2.innerHTML='密码正确';
			item2.style.color='rgba(0,255,0,0.8)';
			flag=true;
		}else{
			this.style.outline='1px solid rgba(255,0,0,0.8)';
			item2.innerHTML='密码不存在';
			flag=false;

		}
	}
	if(res1&&res2&&flag){
		sub.removeAttribute('disabled');
	}else{
		sub.setAttribute('disabled','disabled')
	}
}
