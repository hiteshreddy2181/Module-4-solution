function module4(){
	const name=["hitesh","John","domino","pilla","jaket","ganesh","sagar","santosh","jayaram","Jayanth","ramesh","sreekarni","jyoshna","spoorthi","moulya","jayasimha"];
	for (var i=0; i<name.length; i++){
		if (name[i][0]=="J" || name[i][0]=="j"){
			saygoodbye(name[i]);
		}
        else {
        	sayhello(name[i]);
        }
    } 
}

