<?php
	class Funcionario{
	//classe entidade	
		
		private $id;
		private $nome;
		private $cpf;
		private $telefone;
		private $email;
		private $data_nascimento;
		private $sexo;
		
		public function __construct(){
		}
		
		public function setId($id){
			$this->id = $id;
		}
		
		public function getId(){
			return $this->id;
		}
		
		public function getNome(){
			return $this->nome;
		}
		public function setNome($c){
			$this->nome = $c;
		}

		public function getCpf(){
			return $this->cpf;
		}
		public function setCpf($cpf){
			$this->cpf = $cpf;
		}

		public function getTelefone(){
			return $this->telefone;
		}
		public function setTelefone($telefone){
			$this->telefone = $telefone;
		}
		
		public function getEmail(){
			return $this->email;
		}
		public function setEmail($e){
			$this->email = $e;
		}
		
		public function getDataNascimento(){
			return $this->data_nascimento;
		}
		public function setDataNascimento($data_nascimento){
			$this-> data_nascimento = $data_nascimento;
		}

		public function getSexo(){
			return $this->sexo;
		}
		public function setSexo($sexo){
			$this->sexo= $sexo;
		}
	}

?>