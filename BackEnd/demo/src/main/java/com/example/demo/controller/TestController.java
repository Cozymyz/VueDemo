/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-12-23 13:52:01
 * @LastEditTime: 2023-12-23 14:04:23
 */
package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/")
public class TestController {
    
    @PostMapping("/test") 
    public String test() {
        return "test successfull";
    }
}
