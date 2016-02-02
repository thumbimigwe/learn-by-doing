//Write a simple regex to validate a username.
//
//Allowed characters are:
//
//-lowercase letters -numbers -underscore
//
//length shoould be between 4 and 16 characters.





function validateUsr(username) {
    var res;
    console.log(username.length);
    if(username.length >= 4 && username.length <= 16){
        for (var i = 0; i < username.length; i++){
            res = /[a-z]|\d|_/.test(username.charAt(i));
            if(!res) return false;
        }
        return true;
    } else {
        return false;
    }
}
