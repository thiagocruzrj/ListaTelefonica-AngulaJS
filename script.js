angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [
		{nome: "Thiago", telefone: 99999999, cor: "blue"},
		{nome: "Maria", telefone: 99999998, cor: "red"},
		{nome: "João", telefone: 99999997, cor: "green"},
		{nome: "José", telefone: 99999996, cor: "black"}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria:"Celular"},
		{nome: "Tim", codigo: 15, categoria:"Celular"},
		{nome: "Vivo", codigo: 16, categoria:"Celular"},
		{nome: "Claro", codigo: 17, categoria:"Celular"},
		{nome: "Embratel", codigo: 18, categoria:"Fixo"},
		{nome: "Telemar", codigo: 19, categoria:"Fixo"}
	];
	$scope.adicionarContato = function (contato){
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
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
}); 