package com.example.demo.repository;

import com.example.demo.entity.Student;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StudentRepository extends JpaRepository<Student,Long> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Student as s WHERE s.mssv = :mssv")
    void deleteByMssv(@Param("mssv") String mssv);
}
