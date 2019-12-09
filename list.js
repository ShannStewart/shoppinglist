
function listMaker() {

    //checks when submit button is pressed
      $("#js-shopping-list-form").submit('click', function(event) {
          event.preventDefault();
    
    //gets value from the input space
          const newItem = $('#shopping-list-entry').val();
    //log console to check
            console.log(newItem);
    //add to list
          $('.shopping-list').append(
            '<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
      });
    
    //toggle line-thru when clicking on the 'check' button 
    //will activate when a '.shopping-item-toggle' class under '.shopping-list' is clicked. 
      $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    //log to check if button works
        console.log("check attempted");
    //log to check for correct class
        const checkedItem = $(this).closest('li').children('.shopping-item').attr('class');
    
        console.log(checkedItem);
    //search upwards to li then finds the span element since '.shopping-item-toggle' is not a direct child of the span
       $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');  
      });
    
    //will activate when a '.shopping-item-delete' class under '.shopping-list' is clicked.
      $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        //log to check button is working
          console.log("delete attempted");
          //search upwards until it hits the li element
          $(this).closest('li').remove();
      });
    }
    
    
    $(listMaker);