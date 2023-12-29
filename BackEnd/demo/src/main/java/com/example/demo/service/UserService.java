/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-12-29 15:39:25
 * @LastEditTime: 2023-12-29 15:45:25
 */
package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.mapper.UserMapper;
import com.example.demo.model.User;

import jakarta.annotation.Resource;

@Service
public class UserService {

    @Resource
    private UserMapper userMapper;
    
    public List<User> allUser(){
        List<User> userList = userMapper.getAllUser();
        return userList;
    }

    public List<User> getUserByName(String userName){
        List<User> userList = userMapper.selectByUserName(userName);
        return userList;
    }
}
