angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [ 
        {nome: uppercaseFilter("Thiago"), telefone: "999988887", cor:"blue", data: new Date(), operadora:{nome:"Oi", codigo:"14", categoria: "Celular"}},
        {nome:"Renata", telefone: "999988866", cor:"red", data: new Date(), operadora:{nome:"Tim", codigo:"41", categoria: "Celular"}},
        {nome:"Antônio", telefone: "999988855", cor:"green", data: new Date(), operadora:{nome:"Vivo", codigo:"15", categoria: "Celular"}}
    ];
    $scope.operadoras = [
        {nome:"Oi", codigo:"14", categoria: "Celular", preco: 1},
        {nome:"Vivo", codigo:"15", categoria: "Celular", preco: 2},
        {nome:"Tim", codigo:"41", categoria: "Celular", preco: 3},
        {nome:"GVT", codigo:"25", categoria: "Fixo", preco: 1},
        {nome:"Embratel", codigo:"21", categoria: "Fixo", preco: 3}
    ];
    $scope.adicionarContato = function (contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
           if (!contato.selecionado) return contato; 
        });
    };
    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});