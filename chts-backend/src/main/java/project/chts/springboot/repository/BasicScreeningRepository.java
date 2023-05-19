package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.BasicScreening;

@Repository
public interface BasicScreeningRepository extends JpaRepository<BasicScreening, Integer> {

}
