var forEach = function(array, toDo) {
    for(var i = 0; i < array.length; i++) {
        toDo(array[i]);
    }
};
