package com.example.demo.controller;

import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/student")
@CrossOrigin(origins = "*")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/all")

    public @ResponseBody List<Student> getAllStudent(){
        System.out.println(2);
        return studentService.getAllStudent();
    }

    @PostMapping("/add")
    public @ResponseBody String addStudent(@RequestBody Student student){
        System.out.println(student);
        System.out.println(1);
        studentService.addStudent(student);
        return "added";
    }

    @DeleteMapping("/delete")
    public @ResponseBody String deleteStudent(@RequestParam Long id){
        studentService.deleteStudent(id);
        return "deleted";
    }

    @DeleteMapping("/deleteMssv")
    public @ResponseBody String deleteStudentByMssv(@RequestParam String mssv){
        studentService.deleteByMssv(mssv);
        return "deleted";
    }

    @DeleteMapping("/deleteAll")
    public @ResponseBody String deleteAll(){
        studentService.deleteAll();
        return "deleted";
    }
}
