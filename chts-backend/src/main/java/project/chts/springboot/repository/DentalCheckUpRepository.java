package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.DentalCheckUp;

@Repository
public interface DentalCheckUpRepository extends JpaRepository<DentalCheckUp, Integer>{

}
