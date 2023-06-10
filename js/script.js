function pop(arr){
    arr.length=arr.length-1
    return arr
}   
console.log(pop([1,2,3,4,5]))



function push(arr,newItem){
    let arr2 = []
    for(let i=0; i<arr.length; i++)  arr2[i]=arr[i]
    arr2[arr.length]=newItem
    return arr2
}   
console.log(push([1,2,3,4],5))



function shift(arr){
    let arr2 = []
    for(let i=1; i<arr.length; i++) arr2[i-1]=arr[i]  
    return arr2
}   
console.log(shift([1,2,3,4,5]))



function unshift(arr,newItem){
    let arr2 = []
    arr2[0]=newItem
    for(let i=0; i<arr.length; i++) arr2[i+1]=arr[i]
    return arr2
}   
console.log(unshift([2,3,4,5],1))



function split(str, item){
    let arr = [] , num = 0
    if(item === "")  for(let i=0; i<str.length; i++) arr[i]=str[i] 
    else for(let i=0; i<str.length; i++)
            if(str[i] !== item)  arr[num] !== undefined ? arr[num] += str[i] : arr[num] = str[i]
            else  num++
    return arr
}   
console.log(split("Bobur-Nuriddinov","-"))



function join(arr, item){
    let str = ""
    for(let i=0; i<arr.length; i++) i !== arr.length-1 ? str+=arr[i]+item : str+=arr[i]
    return str
}   
console.log(join(["Bobur", "Nuriddinov", "TATU"],""))
