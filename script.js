angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [
		{nome: uppercaseFilter("Thiago"), telefone: 99999999, data: new Date()},
		{nome: "Maria", telefone: 99999998, data: new Date()},
		{nome: "João", telefone: 99999997, data: new Date()},
		{nome: "José", telefone: 99999996, data: new Date()}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria:"Celular", preco: 1},
		{nome: "Tim", codigo: 15, categoria:"Celular", preco: 1},
		{nome: "Vivo", codigo: 16, categoria:"Celular", preco: 2},
		{nome: "Claro", codigo: 17, categoria:"Celular", preco: 2},
		{nome: "Embratel", codigo: 18, categoria:"Fixo", preco: 3},
		{nome: "Telemar", codigo: 19, categoria:"Fixo", preco: 3}
	];
	$scope.adicionarContato = function (contato){
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato){
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos){
		return isContatoSelecionado = contatos.some(function(contato){
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrnacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	}
}); 
