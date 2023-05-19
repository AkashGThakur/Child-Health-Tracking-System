package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.School;

@Repository
public interface SchoolRepository extends JpaRepository<School, Integer>
{

}
