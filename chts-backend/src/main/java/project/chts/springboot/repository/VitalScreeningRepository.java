package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.VitalScreening;

@Repository
public interface VitalScreeningRepository extends JpaRepository<VitalScreening, Integer> {

}


