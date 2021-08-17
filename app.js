//case increase decrease events
function updateProductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    isIncreasing == true ? productNumber = parseInt(productNumber) + 1 : ((productNumber > 0) ? productNumber = parseInt(productNumber) - 1 : null)

    productInput.value = productNumber
    //update total 
    const productTotal = document.getElementById(product +'-total')
    productTotal.innerText = productNumber * price

    calculateTotal()
}

//get input value
function getInputValue(product){
    const productInput = document.getElementById(product+'-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}


//calculate toal 
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10 
    const total = subTotal + tax

    //update ont the html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = total
}


//phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click',() => {
    updateProductNumber('phone',1219,true)
})

document.getElementById('phone-minus').addEventListener('click',() => {
    updateProductNumber('phone', 1219,false)
})


//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',() => {
    updateProductNumber('case',59,true)
})

document.getElementById('case-minus').addEventListener('click',() => {
    updateProductNumber('case',59,false)
})