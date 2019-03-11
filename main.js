window.onload = () =>  {
    //Global vars
    var list = document.querySelector('#booklist')
    var input = document.querySelector('#booksearch')

    //Functions
    loadList = (content) => {
        list.style.display = 'block'
        content.forEach(item => {
            //Get data
            let name = item.name
            let link = item.link

            //Create li
            let li = document.createElement('li')

            //Add content
            li.innerHTML = `<a href="${link}">${name}</a>`

            //Add to list
            list.appendChild(li)
        })
    }

    clearList = () => {
        list.style.display = 'none'
        list.innerHTML = ''
    }

    //set on input
    input.oninput = (event) => {
        //Clear first
        clearList()
        //Get data
        let term = input.value
        //get Data
        let data = getMatches(term)
        //display only if there are input
        if(term != ''){
            loadList(data)
        }
        
    }
    
}

