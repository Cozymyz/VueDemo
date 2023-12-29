/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-12-23 13:46:16
 * @LastEditTime: 2023-12-23 13:47:53
 */
package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
public class TestController {

    @RequestMapping("/test")
    public String test() {
        return "test successful";
    }
    
    
}
