package project.chts.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.chts.springboot.exception.BmiScreeningException;
import project.chts.springboot.model.BmiScreening;
import project.chts.springboot.model.ChildAddress;
import project.chts.springboot.repository.BmiScreeningRepository;

@Service
public class BmiScreeningService {

	@Autowired
	private BmiScreeningRepository bmiScreeningRepository;

	public List<BmiScreening> findAllBmiScreening() {
		
		return bmiScreeningRepository.findAll();
	}

	public BmiScreening saveBmiScreening(BmiScreening bmiScreening) {
		return bmiScreeningRepository.save(bmiScreening);
	}
	
	public BmiScreening findById(Integer id) {
		BmiScreening bmiScreening= bmiScreeningRepository.findById(id)
				.orElseThrow(() -> new BmiScreeningException("BmiScreening record not exist with id :" + id));
		return bmiScreening;
	}
	
	public BmiScreening updateBmiScreening(Integer id, BmiScreening bmiScreeningDetails ) {
		
		BmiScreening bmiScreening = bmiScreeningRepository.findById(id)
				.orElseThrow(() -> new BmiScreeningException("BmiScreening record not exist with id :" + id));
				
		bmiScreening.setHeight(bmiScreeningDetails.getHeight());
		bmiScreening.setWeight(bmiScreeningDetails.getWeight());
		bmiScreening.setBmi(bmiScreeningDetails.getBmi());
		bmiScreening.setHeight_for_age(bmiScreeningDetails.getHeight_for_age());
		bmiScreening.setWeight_for_age(bmiScreeningDetails.getWeight_for_age());
		bmiScreening.setArm_size(bmiScreeningDetails.getArm_size());
		bmiScreening.setBirthdate(bmiScreeningDetails.getBirthdate());
		bmiScreening.setAge(bmiScreeningDetails.getAge());
		BmiScreening updatebmiScreening = bmiScreeningRepository.save(bmiScreening);
		return updatebmiScreening;
	}
	
	public BmiScreening deleteBmiScreening(Integer id) {
		BmiScreening bmiScreening = bmiScreeningRepository.findById(id)
			.orElseThrow(() -> new BmiScreeningException("BmiScreening record not exist with id :" + id));
		bmiScreeningRepository.delete(bmiScreening);
		return bmiScreening;
	}
	
}
