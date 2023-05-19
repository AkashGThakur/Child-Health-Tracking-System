package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.AuditoryScreening;

@Repository
public interface AuditoryScreeningRepository extends JpaRepository<AuditoryScreening, Integer> {

}
