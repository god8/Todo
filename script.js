$(() => {
    let newtask = $('#newtask')
    let addtask = $('#addtask')
    let todolist = $('#todolist')

    addtask.click(() => {
        let task = newtask.val()
        newtask.val('')
        todolist.append(
            $('<li>').text(task).click(function () {
                $(this).toggleClass('done')
            })
            .append($('<button>').text('v').click(function(){
                $(this).parent().insertAfter($(this).parent().next())}))
            .append($('<button>').text('^').click(function(){
                $(this).parent().insertBefore($(this).parent().prev())}))
                .append($('<button>').text('x') .click(function(){
                    $(this).parent().remove()
                }))
        )

       
        
    })
   

})