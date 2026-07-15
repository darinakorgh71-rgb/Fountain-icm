
document.getElementById('connect').onclick=async()=>{
 if(!window.ethereum){alert('Install MetaMask');return;}
 try{
 const accounts=await ethereum.request({method:'eth_requestAccounts'});
 document.getElementById('status').textContent='Connected: '+accounts[0];
 }catch(e){
 document.getElementById('status').textContent='Connection cancelled';
 }
};
