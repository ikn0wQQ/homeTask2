
export function evenOddValue(){ 
	let arr=[];

	while (arr.length <50) {
		let randomValue = Math.floor(Math.random()*100);
		while(arr.indexOf(randomValue) < 0){
			arr.push(randomValue);
		}

	}
	

const evenArr = [];
const oddArr = [];

	for (let i = 0; i < arr.length; i++ ) {
		let elementArray = arr[i];
		let evenOrOdd = elementArray%2;
			
		if(evenOrOdd > 0) {
			oddArr.push(elementArray)
		} else {evenArr.push(elementArray)}
	}

let evenValue = Math.max(...evenArr);
let oddValue = Math.max(...oddArr);
let evenOddValue = [evenValue,oddValue ];
return evenOddValue;
}
window.evenOddValue=evenOddValue;
