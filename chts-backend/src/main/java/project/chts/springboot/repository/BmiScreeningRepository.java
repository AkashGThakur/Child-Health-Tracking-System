package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.BmiScreening;

@Repository
public interface BmiScreeningRepository extends JpaRepository<BmiScreening, Integer> {

}
