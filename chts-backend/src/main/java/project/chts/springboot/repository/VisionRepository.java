package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.Vision;

@Repository
public interface VisionRepository extends JpaRepository<Vision, Integer>{
	

}
