package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.Family;

@Repository
public interface FamilyRepository extends JpaRepository <Family, Integer>{
	

}  