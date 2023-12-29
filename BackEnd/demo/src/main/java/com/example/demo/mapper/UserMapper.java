/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-12-29 15:33:45
 * @LastEditTime: 2023-12-29 15:38:43
 */
package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.example.demo.model.User;

public interface UserMapper {
    
    @Select("select * from user where User_Name like CONCAT('%',#{userName},'%')")
    List<User> selectByUserName(String userName);

    @Select("select * from user")
    List<User> getAllUser();
    
}
