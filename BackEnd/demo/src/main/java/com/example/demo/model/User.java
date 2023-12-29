/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-12-29 15:18:00
 * @LastEditTime: 2023-12-29 15:33:40
 */
package com.example.demo.model;

public class User {

    private Integer userId;
    
    private String userName;

    private String passWord;

    private String userIntro;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getUserIntro() {
        return userIntro;
    }

    public void setUserIntro(String userIntro) {
        this.userIntro = userIntro;
    }
    
}
