var forEach = function(array, toDo) {
    for(var i = 1; i < array.length; i++){
        toDo(array[i]);
    }
};
