function taskAssignment(k, tasks) {
	const output = []
	let sortedArr = [...tasks]
	sortedArr = sortedArr.sort((a, b) => a - b)
	const valuesObj = {}
	
	for (let i = 0; i < tasks.length; i++) {
		if (!valuesObj[tasks[i]]) valuesObj[tasks[i]] = []
		valuesObj[tasks[i]].push(i)
	}
	
	let start = 0
	let end = sortedArr.length - 1
	while (start < k) {
		const firstVal = valuesObj[sortedArr[start]].pop()
		const secondVal = valuesObj[sortedArr[end]].pop()
		output.push([firstVal, secondVal])
		start++
		end--
	}
 
	return output
}