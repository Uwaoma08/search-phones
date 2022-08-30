const phones = document.getElementById('phones')
const input = document.querySelector('input')

console.log(input)

const data = [
    {
        name: 'iphone',
        price: 'From $400 to $1500',
        image: './img/apple.png'
    },
    {
        name: 'Samsung',
        price: 'From $250 to $1300',
        image: './img/samsung.png'
    },
    {
        name: 'Nokia',
        price: 'From $200 to $1000',
        image: './img/nokia.jpg'
    },
    {
        name: 'infinix',
        price: 'From $100 to $700',
        image: './img/infinix.png'
    },
    {
        name: 'Tecno',
        price: 'From $100 to $700',
        image: '../img/tecno.png'
    },
]
const renderHTML =(arrayInput) => {
const result = (arrayInput).map((item)=>{
    return `<div class="phone-types">
    <img class="images" src="${item.image}" alt="">
    <div class="phone-class">
        <p class="name">${item.name}</p>
        <p class="disc">Feel the class and functionality of a mobile phone</p>
        <p class="price">${item.price}</p>
    </div>
</div>`
})
phones.innerHTML = result.join('')

}
renderHTML(data)

input.addEventListener('keyup', (e)=>{
    e.preventDefault()

    const filteredData = data.filter(item=>{
        const condition1 = item.name.toLowerCase().includes(e.target.value.toLowerCase());
        const condition2 = item.price.toLowerCase().includes(e.target.value.toLowerCase());
         
        if( condition1|| condition2){
            return true
        }
        return false

    })
    
    renderHTML(filteredData)
})