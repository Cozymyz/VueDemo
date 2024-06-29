/*
 * @Descripttion:
 * @version:
 * @Author: Meiyizhi
 * @Date: 2023-12-29 15:16:46
 * @LastEditTime: 2023-12-30 10:14:11
 */
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.utils.Msg;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/allUser")
    public Msg allUser(int pageNumber, int pageSize) {
        List<User> allUserList = userService.allUser();
        int total = allUserList.size();
        int allPage = total % pageSize == 0 ? total  / pageSize : total / pageSize + 1;
        if( pageNumber > allPage ){
            pageNumber = allPage;
        }
        int no = (pageNumber - 1) * pageSize;
        List<User> userList = userService.getPageUser(no, pageSize);
        return Msg.success().add("userList", userList).add("total", total).add("allPage", allPage);
    }

    @PostMapping("/searchUser")
    public Msg searchUser(String userName) {
        List<User> userList = userService.getUserByName(userName);
        return Msg.success().add("userList", userList);
    }

}
