angular.module("listaTelefonica").factory("contatosAPI", function(){
    var _getContatos = function (){
        return $http.get("http://localhost:3001/contatos")
    };
});