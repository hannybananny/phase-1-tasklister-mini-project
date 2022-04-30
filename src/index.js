document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault(logToDo(e.target.new_task_description.value))
    form.reset()
  })
  
  
  
  function logToDo(toDo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    let select = createPriorty()
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'done'
    p.textContent = `${toDo}  `
    p.append(select, btn)
    document.querySelector("#list").appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }

  function createPriorty() {
      let priority = ["High", "Medium", "Low"]
      let select = document.createElement("select")
      select.id = "Priority"
      
      for (const value of priority) {
        let option = document.createElement("option")
        option.textContent = value
        select.appendChild(option);
        
      }
      return select  
  }


});
