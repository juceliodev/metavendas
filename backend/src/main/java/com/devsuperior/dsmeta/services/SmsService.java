package com.devsuperior.dsmeta.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {
	
	@Autowired
	private SaleRepository repository;
	
	/*a anotacao @Value busca os valores nas variaveis de ambiente do apllication.proerties
	 * e setam nas variaveis abaixo*/

	@Value("${twilio.sid}")
	private String twilioSid;  /*id*/

	@Value("${twilio.key}")
	private String twilioKey; /*Chave token*/

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom; /*Numero de telefone do rememtente*/

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo; /*Numero de telefone destinatario*/

	
	/*Codigo para envio de sms
	 * Este codigo foi retirado da documentacao do Twillio
	 * https://www.twilio.com/pt-br/docs/sms/quickstart/java
	 *  e adaptado para este contexto*/
	public void sendSms(Long id) {
		
	   Sale sale = repository.findById(id).get();
	    
	   String msg = "O vendedor " + sale.getSellerName() + " foi destaque em " + 
			   		sale.getDate().getMonthValue() + "/" + sale.getDate().getYear() +
			   		" com um valor total em vendas de R$ " + sale.getAmount();
	  
	    
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}