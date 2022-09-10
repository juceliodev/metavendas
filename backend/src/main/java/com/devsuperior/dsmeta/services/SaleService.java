package com.devsuperior.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	
	/*Metodo retorna as vendas com base um uma data minima e maxima recebida por argumento do frontend
	 * retorno paginado*/
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable){
		
		/*Pegando a data de hoje atua e o passando o zoneId do sistema*/
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		/*Caso a data venha vazia pegar a data de um ano atras*/
		 LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		 
		
		/*Condicao ternaria para caso a data venha vazia usa como padrao a data maxima atual*/
		LocalDate max = maxDate.equals("") ? today :  LocalDate.parse(maxDate);
		
		return repository.findByDate(min, max, pageable);
	}

}
