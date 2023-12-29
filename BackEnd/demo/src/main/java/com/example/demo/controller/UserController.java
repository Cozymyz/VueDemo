/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-12-29 15:16:46
 * @LastEditTime: 2023-12-29 15:57:02
 */
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.utils.Msg;

import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/allUser")
    public Msg allUser() {
        //TODO: process POST request
        List<User> userList = userService.allUser();
        return Msg.success().add("userList", userList);
    }

    @PostMapping("/searchUser")
    public Msg searchUser(String userName) {
        //TODO: process POST request
        List<User> userList = userService.getUserByName(userName);
        return Msg.success().add("userList", userList);
    }
    
}
