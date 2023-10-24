package com.example.demo.service;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudent(){
        return studentRepository.findAll();
    }

    public void addStudent(Student student){
        studentRepository.save(student);
        return;
    }

    public void deleteStudent(Long studentID){
        studentRepository.deleteById(studentID);
        return;
    }

    public void deleteByMssv(String mssv){
        studentRepository.deleteByMssv(mssv);
    }

    public void deleteAll(){
        studentRepository.deleteAll();
    }
}
