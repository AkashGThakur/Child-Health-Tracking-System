package project.chts.springboot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.Child;
import project.chts.springboot.model.Psychological;

@Repository
public interface PsychologicalRepository extends JpaRepository<Psychological, Integer> {

}
